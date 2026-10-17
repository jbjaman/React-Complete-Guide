// Callback হলো এমন একটি function, যেটিকে অন্য একটি function-এর argument হিসেবে পাঠানো হয়, যাতে সেটি প্রয়োজনমতো call করা যায়।

function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback(); // greet()-এর ভেতরে callback() লিখে সেটিকে call করা হয়েছে।
}

function sayBye() {
  console.log("Good Bye");
}

// greet("Rahim", sayBye); // sayBye-কে greet()-এর argument হিসেবে পাঠানো হয়েছে।

// sayBye-এর পরে () নেই। তাই function-টিকে call না করে তার reference পাঠানো হচ্ছে।

/**
 * Output:
 * Hello, Rahim
 * Good Bye
 *
 */

greet("Rahim", sayBye()); // Output: TypeError

// এখানে sayBye() সঙ্গে সঙ্গে call হয়ে যাবে, এবং তার return value callback parameter-এ যাবে।

// Asynchronous callback :

console.log("Start");

// setTimeout()-এ পাঠানো function-টি callback

setTimeout(function () {
  console.log("Callback Execute");
}, 1000);

console.log("End");

/**
 * Output:
 *
 * Start
 * End
 * Callback Execute
 *
 *
 */
