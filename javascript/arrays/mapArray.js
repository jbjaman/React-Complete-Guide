const prices = [100, 200, 300];

const updatedPrices = prices.map((price) => price + 10);

console.log(updatedPrices); // [ 110, 210, 310 ]
console.log(prices); // [ 100, 200, 300 ]

// Callback মানে হলো—"একটি ফাংশন যা অন্য কোনো ফাংশনের ভেতরে প্যারামিটার বা আর্গুমেন্ট হিসেবে পাঠানো হয় এবং পরে প্রয়োজন অনুযায়ী চালিয়ে (call করে) দেওয়া হয়।"
// সহজ কথায়: "তুমি আগে তোমার কাজটা করো, কাজ শেষ হলে বা প্রতিটি উপাদানের জন্য এই ফাংশনটা চালাবে।"

const numbers = [10, 20, 30];

function doubleIt(number) {
  return number * 2;
}

const doubledNumbers = numbers.map(doubleIt); // এখানে doubleIt ফাংশনটিই হলো Callback Function!

console.log(doubledNumbers); // [20, 40, 60]

// আলাদা করে ফাংশন না বানিয়ে আমরা সাধারণত map()-এর ভেতরেই সরাসরি ছোট একটা ফাংশন লিখে দিই:

const doubledNumbers = numbers.map((num) => num * 2);

// এখানে num => num * 2 অংশটুকুই হলো Callback Function।

// যখন একটি ফাংশনকে অন্য ফাংশনের ভেতরে কাজ করার জন্য দেওয়া হয়, তখন সেই ভেতরের ফাংশনটিকে Callback Function বলা হয়।
