sayHello();

function sayHello() {
  console.log("Hello !");
}

// Output: Hello !

// Function declaration-টি scope তৈরি হওয়ার সময়ই callable function হিসেবে প্রস্তুত থাকে। তাই declaration-এর আগেই function call করা যায়।

/**
 * Question: Function declaration-ও কি সব জায়গায় hoisted?
 *
 * Answer: function declaration-এর আচরণ তার context-এর ওপরও নির্ভর করতে পারে,
 * বিশেষ করে পুরোনো JavaScript-এর কিছু block-level function declaration-এর ক্ষেত্রে।
 * Modern strict mode ও ES modules-এ সাধারণত block-এর ভেতরের function declaration সেই
 * block-এর scope-এ সীমাবদ্ধ থাকে।
 */

{
  function greet() {
    console.log("OK HELLO !");
  }

  greet(); // Output: OK HELLO !
}

greet(); // Output: ReferenceError

/** Block-এর বাইরে greet accessible নয়।
 * তাই শুধু “function declaration সবসময় global” মনে রাখা ভুল হবে।
 */
