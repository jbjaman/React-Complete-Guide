function greet(name = "Guest") {
  return `Hello, ${name}`;
}

console.log(greet());

// Default parameter কোনো argument না দিলে fallback value দেয়।

// যখন আপনি কোনো ফাংশন ডাকেন কিন্তু কোনো মান (Argument) দেন না, তখন সিস্টেম যেন ভেঙে না পড়ে বা undefined না দেখায়, সেটার জন্য যে বিকল্প মান (Default/Backup Value) সেট করে রাখা হয়, তাকেই Fallback Value বলে।

// Fallback UI / Component (React-এ): আপনার ওয়েবসাইটের কোনো অংশ যদি লোড হতে দেরি করে বা এরর দেয়, তখন পুরো স্ক্রিন সাদা না দেখিয়ে যে লোডিং স্পিনার (Loading...) বা এরর মেসেজটা দেখানো হয়, সেটাই হলো Fallback UI।

// Fallback Function: কোনো নির্দিষ্ট ফাংশন কাজ না করলে বা ভুল ইউআরএল-এ হিট করলে যে ব্যাকআপ ফাংশনটি রান করে।

// প্রোগ্রামিংয়ে Fallback মানেই হলো—"প্রধান জিনিসটা না থাকলে বিকল্প/ব্যাকআপ হিসেবে যেটা ব্যবহার করা হবে।"

// Rest Parameter

function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(2, 3, 4));

// ...numbers এখানে rest parameter। এটি একাধিক argument-কে একটি array-তে সংগ্রহ করে।

// Default Parameters কখন কাজ করে?

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Argument না দিলে বা undefined দিলে default value ব্যবহার হয়।

console.log(greet(undefined)); // Hello, Guest!

// null দিলে default value ব্যবহার হয় না।

console.log(greet(null)); // Hello, null!

// Empty string "" দিলেও default value ব্যবহার হয় না।

console.log(greet("")); // Hello, !

// একাধিক parameter

function calculatePrice(price, quantity = 1) {
  return price * quantity;
}

// এখানে quantity না দিলে সেটি 1 হবে।
console.log(calculatePrice(100)); // 100
console.log(calculatePrice(100, 3)); // 300

// সাধারণত default parameter-গুলো optional argument হিসেবে ব্যবহৃত হয়। Required parameter আগে এবং optional parameter পরে রাখলে function call করা ও বোঝা সহজ হয়।

function test(value = 100) {
  return value;
}

console.log(test()); // 100
console.log(test(undefined)); // 100
console.log(test(null)); // null
console.log(test(0)); // 0
console.log(test(false)); // false

// Default parameter মূলত missing argument বা undefined-এর জন্য, সব falsy value-এর জন্য নয়।
