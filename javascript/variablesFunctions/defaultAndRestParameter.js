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
