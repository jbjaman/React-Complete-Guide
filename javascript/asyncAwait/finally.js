// async/await-এ try/catch/finally

// একটি asynchronous operation সফল বা ব্যর্থ—দুই ক্ষেত্রেই cleanup করতে চাইলে finally ব্যবহার করা যায়।

async function getData() {
  try {
    // try-তে মূল operation থাকে।
    console.log("Loading...");

    const data = await Promise.reject(new Error("Server unavailable"));

    console.log(data);
  } catch (error) {
    // catch error handle করে।
    console.log("Error:", error.message);
  } finally {
    // - finally success বা failure—উভয় ক্ষেত্রেই cleanup-এর কাজ করতে পারে।
    console.log("Finished");
  }
}

getData();

// Loading...
// Error: Server unavailable
// Finished

// /একটি Function থেকে আরেকটি Async Function call করা

// ধরো, তোমাকে প্রথমে user-এর তথ্য এবং তারপর সেই user-এর orders আনতে হবে।

function getUser() {
  return Promise.resolve({
    id: 1,
    name: "Rahim",
  });
}

function getOrders(userId) {
  return Promise.resolve([
    { id: 101, userId },
    { id: 102, userId },
  ]);
}

async function showUserOrders() {
  try {
    const user = await getUser();

    console.log("User:", user.name);

    const orders = await getOrders(user.id);

    console.log("Orders:", orders.length);
  } catch (error) {
    console.error("Failed:", error.message);
  }
}

showUserOrders();

// User: Rahim
// Orders: 2

// এখানে দ্বিতীয় operation প্রথমটির result-এর ওপর নির্ভর করছে:
// - প্রথমে user-এর তথ্য পাওয়া হচ্ছে।
// - তারপর user.id ব্যবহার করে orders আনা হচ্ছে।
// এই ক্ষেত্রে ধারাবাহিকভাবে await ব্যবহার করা যুক্তিযুক্ত, কারণ দ্বিতীয় operation-এর input প্রথম operation-এর result-এর ওপর নির্ভরশীল।

// অপ্রয়োজনীয়ভাবে sequential করা
// যদি দুটি operation একে অপরের ওপর নির্ভর না করে, তাহলে একটির পর একটি await করে অপেক্ষা করানো অপ্রয়োজনীয় delay তৈরি করতে পারে।

async function loadBoth() {
  const userPromise = getUser();
  const ordersPromise = getOrders(1);

  const user = await userPromise;
  const orders = await ordersPromise;

  console.log(user.name, orders.length);
}

// এখানে দুটি function call প্রথমেই করা হয়েছে। যদি এগুলো বাস্তব independent asynchronous request হয়, তাহলে দুটিই পাশাপাশি শুরু হতে পারে।

// Async Function-এর Error বাইরে কীভাবে যায়?
async function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}
// এখানে throw ব্যবহার করা হয়েছে। কিন্তু যেহেতু এটি async function-এর ভেতরে, error-টি caller-এর কাছে rejected Promise হিসেবে প্রকাশ পাবে।

// এভাবে handle করা যায়:

divide(10, 0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

//   Cannot divide by zero

// অথবা await দিয়ে:

async function main() {
  try {
    const result = await divide(10, 0);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

main();
// Cannot divide by zero

// Interview takeaway: async function-এর ভেতরে throw করা error সাধারণত returned Promise-কে reject করে। Caller .catch() অথবা try/catch দিয়ে await করার সময় সেই error handle করতে পারে।
