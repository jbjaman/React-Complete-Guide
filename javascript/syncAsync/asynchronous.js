// Asynchronous operation এমনভাবে কাজ করার সুযোগ দেয়, যাতে কোনো operation-এর ফলাফলের জন্য অপেক্ষা করার সময় JavaScript-এর অন্য কাজগুলো অপ্রয়োজনীয়ভাবে আটকে না থাকে।
// JavaScript-এর সাধারণ synchronous code একটির পর একটি চলে, কিন্তু asynchronous operation-এর completion পরে handle করা যেতে পারে। এর মানে এই নয় যে প্রতিটি asynchronous operation-ই আলাদা JavaScript thread-এ চলে।

console.log("Start"); // প্রথমে "Start" print হয়।

// setTimeout() timer schedule করে এবং callback-টি পরে চালানোর ব্যবস্থা করে।

setTimeout(() => {
  console.log("Timer Finished"); // Timer-এর callback চালানোর উপযুক্ত সময় এলে সেটি execute হয়।
}, 2000);

// JavaScript পরের statement-এ যায় এবং "End" print করে।

console.log("End");

/**
 * Output:
 *
 * Start
 * End
 * Timer Finished
 */
