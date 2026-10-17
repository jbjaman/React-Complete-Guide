console.log(age); // output: ReferenceError

let age = 20;

console.log(country); // output: ReferenceError

const country = "BD";

// const - declaration initialize হওয়ার আগে access করা যায় না। তাছাড়া const declare করার সময় initialize করা বাধ্যতামূলক:

const number; // SyntaxError

const number = 20; // right proccess

/**
 * Question : let এবং const কি hoisted হয়?
 * Answer :হ্যাঁ, তাদের declarations hoisting-এর সঙ্গে সম্পর্কিত;
 * কিন্তু var-এর মতো শুরুতেই undefined দিয়ে initialize হয় না।
 * Declaration initialize হওয়ার আগে তারা TDZ-তে থাকে।
 */
