console.log(age); // output: undefined

var age = 23;

console.log(score); // output: undefined

var score = 100;

console.log(score); // output: 100

console.log(name); // output: undefined

var name = "Rahim";

var idNum = 20;

console.log(idNum); // output: 20

// Interview-তে সংক্ষিপ্ত উত্তর কীভাবে দেবে?

// What is hoisting?

// JavaScript execution context তৈরি হওয়ার সময় declarations process হওয়ার আচরণকে hoisting বলা হয়। var শুরুতে undefined দিয়ে initialize হয়, কিন্তু let ও const initialization-এর আগে TDZ-তে থাকে।

// Q: What is the Temporal Dead Zone?

// Lexical variable-এর scope শুরু হওয়ার পর থেকে declaration initialize হওয়া পর্যন্ত সময়কে TDZ বলা হয়। এই সময়ে variable access করলে ReferenceError হয়।

// Q: Why can a function declaration be called before its definition?

// Function declaration execution শুরু হওয়ার আগেই callable হিসেবে প্রস্তুত থাকে। কিন্তু function expression-এর ক্ষেত্রে variable initialization ও assignment-এর সময় গুরুত্বপূর্ণ।

// Q: What is the difference between undefined and ReferenceError?

// undefined একটি JavaScript value। ReferenceError হলো এমন error যা হতে পারে কোনো accessible binding না থাকলে অথবা TDZ-তে থাকা binding access করলে।
