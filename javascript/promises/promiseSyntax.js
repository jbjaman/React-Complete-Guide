const myPromise = new Promise((resolve, reject) => {
  // কাজ সফল হলে resolve(...)
  // কাজ ব্যর্থ হলে reject(...)
});

/**
 * - new Promise(...) একটি Promise object তৈরি করে।
 * - resolve হলো একটি function, যা দিয়ে Promise-কে সফলভাবে fulfill করা যায়।
 * - reject হলো একটি function, যা দিয়ে Promise-কে reject করা যায়।
 *
 * এই resolve ও reject function-কে JavaScript নিজে executor function-এর argument হিসেবে দেয়।
 *
 */

// Successful Promise

const promise = new Promise((resolve, reject) => {
  resolve("Task Completed");
});

promise.then((result) => {
  console.log(result);
});

// Output: Task Completed

/**
 * - Promise তৈরি হয়েছে।
 * - Executor function সঙ্গে সঙ্গেই execute হয়েছে।
 * - resolve("Task completed!") Promise-কে fulfilled করেছে।
 * - .then() success handler register করেছে।
 * - Promise fulfilled হওয়ায় handler পরে execute হয়েছে এবং result print করেছে।
 *
 * Promise-এর executor function synchronousভাবে execute হয়। কিন্তু .then()-এর handler asynchronousভাবে, বর্তমান synchronous execution শেষ হওয়ার পরে execute হয়।
 *
 */

console.log("A"); // 1

const promise = new Promise((resolve) => {
  console.log("B"); // 2
  resolve("C"); // 4
});

promise.then((value) => {
  console.log(value);
});

console.log("D"); // 3

/**
 * B আগে এসেছে, কারণ Promise executor সঙ্গে সঙ্গে চলে। C পরে এসেছে, কারণ .then() handler পরে execute হয়।
 */

// Failed Promise:

const promise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

promise.catch((error) => {
  console.log(error);
  // এখানে reject() Promise-কে rejected করেছে। .catch() সেই rejection handle করেছে।
});

// Output: Something went wrong!

// Success অথবা failure-এর মধ্যে একটি বেছে নেওয়া

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Eligible");
    } else {
      reject("Not Eligible");
    }
  });
}

checkAge(20)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
