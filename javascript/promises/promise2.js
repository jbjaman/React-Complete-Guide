// Promise তৈরি করার আরও দুটি সহজ উপায়

// সব সময় new Promise() লিখতে হয় না।
// Promise.resolve()

const p = Promise.resolve("Hello");

p.then((value) => {
  console.log(value);
});

// Hello
// এটি একটি fulfilled Promise পাওয়ার সহজ উপায়।

// Promise.reject()

const p = Promise.reject(new Error("Oops"));

p.catch((error) => {
  console.log(error.message);
});
// Oops
// এটি একটি rejected Promise পাওয়ার সহজ উপায়।

// একটি গুরুত্বপূর্ণ পার্থক্য:
// - Promise.resolve(value) value-টিকে Promise-এর fulfillment result হিসেবে গ্রহণ করে। value যদি নিজেই Promise বা thenable হয়, তাহলে Promise সেটির result-এর সঙ্গে assimilate হতে পারে।
// - Promise.reject(reason) rejection reason হিসেবে দেওয়া value ব্যবহার করে।

// Interview-এর জন্য ৫টি গুরুত্বপূর্ণ প্রশ্ন:

// Q1. What is a Promise in JavaScript?

// A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation. It can be pending, fulfilled, or rejected. We commonly handle its result using .then() and its errors using .catch().

// Q2. What is the difference between resolve() and reject()?
// - resolve(value) Promise-কে fulfilled করে, অথবা দেওয়া value যদি Promise/thenable হয়, তার result-এর সঙ্গে assimilate করে।
// - reject(reason) Promise-কে rejected করে।

// Q3. What is Promise chaining?

// Promise chaining হলো একাধিক .then()-কে ধারাবাহিকভাবে ব্যবহার করে asynchronous steps-এর মধ্যে data pass করা। একটি .then() callback যে value return করে, সেটি পরবর্তী .then()-এর input হতে পারে।

// Q4. What is the difference between .then() and .catch()?
// - .then() সাধারণত fulfillment result handle করে; চাইলে দ্বিতীয় argument দিয়ে rejection-ও handle করতে পারে।
// - .catch() rejection handle করার জন্য ব্যবহৃত হয় এবং Promise chain-এর আগের handler থেকে throw হওয়া error-ও ধরতে পারে।

// Q5. Does .finally() receive the Promise result?
// সাধারণত না। .finally() callback fulfillment value বা rejection reason argument হিসেবে পায় না। এটি operation শেষ হলে cleanup-এর মতো কাজ করতে উপযোগী।
