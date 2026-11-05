function first() {
  console.log("First function"); //  1
}

function second() {
  first();
  console.log("Second function"); //  2
}

console.log("Start");
second();
console.log("End");

/**
 * Output:
 *
 * Start
 * First function
 * Second function
 * End
 */

// JavaScript যখন function call করে, তখন তার execution পরিচালনা করার জন্য Call Stack ব্যবহার করে।

/**
 * Function call হলে তার execution stack-এ যুক্ত হয়।
 * Function শেষ হলে তার execution stack থেকে সরে যায়।
 * একটি synchronous function চলতে থাকলে তার পরের synchronous statement সাধারণত অপেক্ষা করে।
 */

// Nested function call

function a() {
  console.log("A"); // 1
  b();
  console.log("D"); // 4
}

function b() {
  console.log("B"); // 2
  c();
}

function c() {
  console.log("C"); // 3
}

a();

/**
 * Output :
 * A
 * B
 * C
 * D
 */
