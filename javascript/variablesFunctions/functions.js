// Functions — কোডকে reusable করা... একটি function হলো নির্দিষ্ট কাজ করার জন্য তৈরি reusable code block।

function add(a, b) {
  // a, b হলো parameters।
  return a + b;
}
// 4, 6 হলো arguments।
console.log(add(4, 6)); // 10

// Function declaration

// Named function; declaration সাধারণত নিজের scope-এ ব্যবহারের আগে call করা যায়, কারণ এটি hoisted হয়।

function greet(name) {
  return `Hello, ${name}`;
}

// Function expression

const greet = function (name) {
  return `Hello, ${name}`;
};

// Function-টি একটি variable-এ রাখা হয়েছে। const binding initialization-এর আগে এটি ব্যবহার করা যায় না। মানে হলো—আপনি const greet = ... লাইনটির ওপরে বা আগে সেই ফাংশনটি ডাকতে বা ব্যবহার করতে পারবেন না। আগে লাইনটি এক্সিকিউট হয়ে ফাংশনটি ভেরিয়াবলে বসতে হবে, তারপর সেটা ব্যবহার করা যাবে।

// Binding Initialization মানে হলো: ভেরিয়াবল বা ফাংশন তৈরি করার পর তাতে প্রথমবার মান (Value) সেট করা বা মেমোরিতে তাকে ব্যবহারের জন্য প্রস্তুত করা।

// Binding: কোনো ভেরিয়াবলের নামকে মেমোরির সাথে যুক্ত করা।
// Initialization: সেই ভেরিয়াবলে প্রথমবার কোনো মান বা ফাংশন বসানো।
// অর্থাৎ, const greet = ... লেখার মাধ্যমে আপনি কম্পিউটারকে বলছেন, "আমি greet নামে একটি ভেরিয়াবল বানাচ্ছি এবং এতে একটা ফাংশন রাখছি।" এই পুরো প্রসেসটাই হলো Binding Initialization।

// Arrow Function

const greet = (name) => {
  return `Hello , ${name}`;
};

// Arrow function-এর নিজস্ব this ও arguments নেই; enclosing scope থেকে নেয়। তাই সব জায়গায় arrow function ব্যবহার করা ঠিক নয়।

// "Arrow Function-এ arguments নেই" মানে এই নয় যে আপনি ফাংশনে কোনো তথ্য বা আর্গুমেন্ট পাঠাতে পারবেন না। এর অর্থ হলো—সাধারণ ফাংশনের মতো ভেতরে বিল্ট-ইন arguments নামের অবজেক্টটি তৈরি হয় না। Parameter বা ...args ব্যবহার করে আপনি সব তথ্যই পাঠাতে পারবেন।
