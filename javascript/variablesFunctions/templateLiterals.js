const name = "Rahim";

const age = 45;

const message = `My name is ${name} and my age is ${age}.`;

console.log(message);

// এখানে দুটি জিনিস মনে রাখবে:
// - Template literal লিখতে backtick ব্যবহার করতে হয়: `
// - ${...}-এর মধ্যে variable বা JavaScript expression লেখা যায়।

// 2. Expression ব্যবহার করা

// কোডের যে অংশটুকুকে হিসাব বা Evaluate করলে শেষ পর্যন্ত একটি নির্দিষ্ট মান (Value) পাওয়া যায়, তাকেই Expression বলে। কোডের যেকোনো অংশ যা আপনাকে একটি রেজাল্ট বা ভ্যালু দেয় = Expression

const a = 10;
const b = 20;

console.log(`Total = ${a + b}`); // 30
console.log(`Total = ${a * b}`); // 200

// 3. Multiline string

const message34 = `Hello Rahim,
Welcome to JavaScript.
Let's start learning!`;

console.log(message34);

// সাধারণ quotes-এর মধ্যে আলাদা করে newline handle করার প্রয়োজন ছাড়াই একাধিক লাইনের string লেখা যায়।
