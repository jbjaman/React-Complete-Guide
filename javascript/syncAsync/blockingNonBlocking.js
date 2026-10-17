// যে কাজ চলার সময় পরবর্তী কাজগুলো এগোতে পারে না, সেটিকে blocking behavior হিসেবে বোঝানো হয়।

console.log("Start");

let sum = 0;

// এখানে loop শেষ না হওয়া পর্যন্ত JavaScript পরের console.log()-গুলোতে যেতে পারবে না। এই বড় synchronous calculation main thread-কে ব্যস্ত রাখে।

for (let i = 0; i < 1000000000; i++) {
  sum += i;
}

console.log("Calculation Finished");
console.log("End");

// Non Blockiing :

console.log("Start");

// এখানে timer-এর জন্য অপেক্ষা করতে গিয়ে synchronous code আটকে থাকে না।

setTimeout(() => {
  console.log("Timer Finished");
}, 1000);

// setTimeout()-এর callback-এর ভেতরে যদি আবার বড় synchronous calculation লেখো, callback execute হওয়ার সময় সেটিও main thread-কে block করতে পারে।

console.log("End");
