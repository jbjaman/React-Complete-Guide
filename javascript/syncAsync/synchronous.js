// Synchronous JavaScript-এ statement-গুলো সাধারণত একটির পর একটি execute হয়। বর্তমান কাজটি শেষ হলে পরের কাজ শুরু হয়।

console.log("First");
console.log("Second");
console.log("Third");
// ---------
console.log("Start");

let total = 10 + 20;

console.log(total);
console.log("End");
// ----------
console.log("A");

let x = 5;
let y = x * 2;

console.log(y);
console.log("B");

/**
 * Question: JavaScript কি এক সময়ে একটি কাজই করে?
 * 
 * Answer: সাধারণভাবে, browser-এর main JavaScript thread-এ এক সময়ে একটি JavaScript task execute হয়। কিন্তু browser-এ timer, network request, user interaction এবং rendering-এর মতো আরও অনেক কাজের ব্যবস্থা আছে।
 * 
 * 
 * - JavaScript code-এর synchronous execution সাধারণত Call Stack-এ পরিচালিত হয়।
- Browser-এর মতো environment timer ও network operation-এর মতো কাজ পরিচালনা করতে পারে।
- কোনো asynchronous operation-এর callback বা result পরে JavaScript-এ handle হয়।
- Event Loop ও task scheduling-এর মাধ্যমে উপযুক্ত সময়ে callback execute করার সুযোগ পায়।
 * 
 */

// JavaScript typically executes synchronous code on a single main thread. Asynchronous APIs allow operations to complete without blocking that thread while waiting. Their callbacks or results are scheduled to run later, according to the event loop and task scheduling rules.
