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
