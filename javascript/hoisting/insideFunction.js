function test() {
  console.log(number); // output: undefined
  var number = 50;
  console.log(number); // output: 50
}

test();

/**
 * Question: typeof কি সবসময় safe?
 * Answer: সাধারণত declare না করা identifier-এর ক্ষেত্রে typeof undefined দেয়।
 */

console.log(typeof unknownVariable); // output: Undefined

// কিন্তু TDZ-তে থাকা variable-এর ক্ষেত্রে এটি নিরাপদ নয়:

console.log(typeof age);
let age = 30; // output: ReferenceError

/**
 * Question: Function-এর ভেতরে var ও বাইরে একই নাম
 * Answer: এখানে অনেকে ভাববে score-এর value 100 হবে।
 * কিন্তু function-এর ভেতরে var score declaration থাকার কারণে সেটি local variable।
 * Function-এর execution context-এ local score আগে initialize হয়েছে undefined দিয়ে।
 * তাই প্রথম log-এ outer variable-এর value পাওয়া যায় না।
 */

var score = 100;

function test() {
  console.log(score); // output: Undefined
  var score = 50;
}

test();
