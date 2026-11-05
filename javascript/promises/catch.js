// .catch() Promise rejection handle করার জন্য ব্যবহৃত হয়।

Promise.reject("Network failed").catch((error) => {
  console.log("Error-", error);
});

// Output: Error- Network failed

// .catch() শুধু reject() থেকে আসা error-ই নয়, Promise chain-এর আগের .then() handler-এর ভেতরে throw হওয়া error-ও handle করতে পারে।

Promise.resolve(10)
  .then((value) => {
    throw new Error("Calculation failed");
  })
  .catch((error) => {
    console.log(error.message);
  });

// Output: Calculation failed

/**
 * - Promise fulfilled হয়েছে।
 * - .then() callback execute হয়েছে।
 * - Callback-এর মধ্যে error throw হয়েছে।
 * - .then() যে নতুন Promise return করে, সেটি rejected হয়েছে।
 * - পরের .catch() error handle করেছে।
 *
 */

// .catch() Promise chain-এর rejection path handle করে।
