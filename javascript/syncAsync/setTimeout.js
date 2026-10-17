// setTimeout() callback-কে সঙ্গে সঙ্গে execute করে না। এটি নির্দিষ্ট delay-এর পরে callback চালানোর জন্য schedule করে।

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

// setTimeout(callback, 0) মানে callback-কে synchronous code-এর মাঝখানে সঙ্গে সঙ্গে চালানো নয়। Callback পরে চালানোর জন্য schedule হয়।

console.log("C");

/**
 * Output :
 * A
 * C
 * B
 *
 */
