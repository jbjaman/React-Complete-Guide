// await কী?
// await ব্যবহার করে একটি Promise-এর settled result-এর জন্য অপেক্ষা করা যায়—সাধারণত একটি async function-এর ভেতরে।

// প্রথমে Promise-এর code দেখি:
function getUser() {
  return Promise.resolve("Rahim");
}

getUser().then((name) => {
  console.log(name);
});
// Rahim

// এবার একই কাজ async/await দিয়ে:

function getUser() {
  return Promise.resolve("Rahim");
}
// getUser() একটি Promise return করেছে।
async function showUser() {
  // await সেই Promise-এর fulfillment value-এর জন্য অপেক্ষা করেছে।
  const name = await getUser();
  // console.log(name) সেটি print করেছে।
  console.log(name);
  //   name-এর মধ্যে "Rahim" এসেছে।
}
// showUser() call হয়েছে।
showUser();
// Rahim

// await কি পুরো JavaScript বন্ধ করে দেয়?
// না। await যে async function-এর ভেতরে আছে, সেই function-এর execution সংশ্লিষ্ট result-এর জন্য pause হয়। এর ফলে পুরো JavaScript thread বন্ধ হয়ে যায় না। অন্য synchronous code চলতে পারে।

async function task() {
  console.log("A"); // task() call হলে "A" synchronousভাবে print হয়।

  //   await-এর পর task()-এর বাকি অংশ পরে চলবে।
  await Promise.resolve();
  // তাই বাইরের code "End" print করতে পারে।
  console.log("B");
  //   এরপর task() আবার চলতে শুরু করে এবং "B" print করে।
}

console.log("Start"); // "Start" আগে print হয়।

task();

console.log("End");
// Start
// A
// End
// B

// Promise chaining বনাম Async/Await

function getPrice() {
  return Promise.resolve(100);
}

async function calculateTotal() {
  try {
    const price = await getPrice();
    const total = price * 2;

    console.log(total);
  } catch (error) {
    console.error(error);
  }
}

calculateTotal();
// 200

// async/await Promise-এর বিকল্প কোনো আলাদা asynchronous system নয়। এটি Promise নিয়ে কাজ করার একটি syntax।

// interview-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।

// await করা Promise reject হলে কী হয়?

Promise.reject(new Error("Request failed"));
// এটি একটি rejected Promise তৈরি করে।
// এবার await দিয়ে সেই Promise ব্যবহার করি:

async function loadData() {
  const result = await Promise.reject(new Error("Request failed"));

  console.log(result);
}

loadData();
// এখানে console.log(result) execute হবে না। await rejected Promise-এর সম্মুখীন হলে loadData()-এর execution সেই error নিয়ে rejected Promise return করার মাধ্যমে শেষ হয়।

// যদি error handle করতে চাই:

async function loadData() {
  // loadData() call হয়েছে।
  try {
    const result = await Promise.reject(new Error("Request failed"));
    // await rejected Promise-এর result নিতে গিয়ে error পেয়েছে। সেই error try block থেকে throw হওয়ার মতো আচরণ করেছে।
    console.log(result);
  } catch (error) {
    // catch error-টি handle করেছে।
    console.log("Error:", error.message);
    // "Error: Request failed" print হয়েছে।
  }
}

loadData();
// Error: Request failed
// await করা Promise reject হলে try/catch দিয়ে সেটি handle করা যায়।
