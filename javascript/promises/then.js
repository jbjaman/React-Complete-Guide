// .then() Promise-এর result handle করার জন্য ব্যবহার করা হয়।

const promise = Promise.resolve(100);

promise.then((value) => {
  console.log(value); // Output: 100
});

// .then()-এর syntax:

promise.then(onFulfilled, onRejected);

// onFulfilled হলো success handler।
// onRejected হলো optional rejection handler।

Promise.resolve("Success").then(
  (value) => {
    console.log("Resolved-", value);
  },
  (error) => {
    console.log("Rejected-", error);
  },
);

// Output: Resolved- Success

// সাধারণত success handle করার জন্য .then() এবং error handle করার জন্য .catch() আলাদাভাবে ব্যবহার করা সহজ ও পরিষ্কার।
