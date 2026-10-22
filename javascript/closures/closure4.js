// Closure এবং var বনাম let: Interview-এর classic question

// Example A: var ব্যবহার করলে

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// 4
// 4
// 4

// কেন 1, 2, 3 নয়?
// 1. var block-scoped নয়; এই loop-এ একটি shared i binding ব্যবহার হচ্ছে।
// 2. setTimeout() callback-গুলো পরে execute হয়।
// 3. Loop শেষ হওয়ার সময় i-এর value হয়ে যায় 4।
// 4. Callback-গুলো execute হওয়ার সময় তারা সেই shared i-এর বর্তমান value পড়ে।
// এখানে closure i-এর সঙ্গে সম্পর্ক ধরে রেখেছে, কিন্তু i-এর আলাদা আলাদা snapshot তৈরি করেনি।

// Example B: let ব্যবহার করলে

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// 1
// 2
// 3

// let-এর ক্ষেত্রে loop-এর প্রতিটি iteration-এর জন্য আলাদা binding তৈরি হয়। ফলে callback-গুলো নিজ নিজ iteration-এর i value পড়তে পারে।

// Interview answer: var loop-এ shared binding ব্যবহৃত হওয়ায় callback-গুলো শেষ পর্যন্ত একই final value পড়ে। let ব্যবহার করলে প্রতিটি iteration-এর আলাদা binding পাওয়া যায়, তাই প্রত্যাশিত 1, 2, 3 output হয়।

// Closure কি সবসময় পুরোনো value ধরে রাখে?
// Closure মানেই variable-এর value freeze হয়ে যাওয়া নয়। Closure সাধারণত variable binding-এর সঙ্গে সম্পর্ক ধরে রাখে। সেই binding পরিবর্তন হলে পরের call-এ পরিবর্তিত value দেখা যেতে পারে।

function createReader() {
  let message = "Hello";

  return {
    read() {
      return message;
    },

    update(newMessage) {
      message = newMessage;
    },
  };
}

const reader = createReader();

console.log(reader.read()); // Hello

reader.update("Welcome");

console.log(reader.read()); // Welcome

// এখানে read() প্রথমে "Hello" return করেছে। পরে update() একই message binding পরিবর্তন করেছে, তাই read() এখন "Welcome" return করছে।

// এ কারণেই closure বুঝতে value আর variable binding-এর পার্থক্য গুরুত্বপূর্ণ।

function makeGreeting(name) {
  return function greet() {
    console.log(`Hello, ${name}`);
  };
}

const greetUser = makeGreeting("Rahim");

greetUser(); // Hello, Rahim

// React component-এও event handler component-এর scope-এর variable access করতে পারে। তবে React state-এর সঙ্গে closure ব্যবহার করার সময় কখন কোন render-এর value callback-এ captured হয়েছে, সেটিও গুরুত্বপূর্ণ। এটিকে প্রায়ই stale closure-এর আলোচনায় দেখা হয়; Hooks শেখার সময় আমরা সেটি আলাদাভাবে বিস্তারিত দেখব।

// মনে রেখো, closure নিজে React-এর কোনো বিশেষ feature নয়—এটি JavaScript-এর একটি fundamental concept।

// Closure ব্যবহার করার সময় কী কী খেয়াল রাখবে?

// 1. Unnecessary long-lived references: দীর্ঘ সময় ধরে কোনো function reference ধরে রাখলে তার সঙ্গে সম্পর্কিত কিছু data-ও প্রয়োজনের চেয়ে বেশি সময় ধরে reachable থাকতে পারে।
// 2. Shared mutable state: একাধিক function একই variable পরিবর্তন করলে code বুঝতে জটিল হতে পারে।
// 3. Loop callback: var দিয়ে loop callback তৈরি করলে shared binding-এর কারণে অপ্রত্যাশিত output হতে পারে।
// 4. Closure মানেই memory leak নয়: Closure স্বাভাবিক ও বহুল ব্যবহৃত JavaScript feature। সমস্যা হয় যখন অপ্রয়োজনীয় reference দীর্ঘ সময় ধরে রাখা হয়।
