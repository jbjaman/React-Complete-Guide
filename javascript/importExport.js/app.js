import { add, PI } from "./math.js";
import { getUserName, userName } from "./user.js";
// Named import-এর নাম সাধারণত export করা নামের সঙ্গে মিলতে হয়। চাইলে alias ব্যবহার করতে পারো:
import { userName as name } from "./user.js";
// Default Export
import greet from "./defaultExport.js";
// Default import-এর নাম নিজের পছন্দমতো দেওয়া যায়:
import sayHello from "./defaultExport.js";
// এখানে sayHello নামটি greet.js-এর function-এর নামের সঙ্গে মিলতেই হবে, এমন নয়।

console.log(add(10, 20));
console.log(PI);

// এখানে math.js থেকে add ও PI export করা হয়েছে, আর app.js-এ সেগুলো import করা হয়েছে।

// Named export: একটি ফাইল থেকে একাধিক named export করা যায়।
// Import করার সময় curly braces ব্যবহার করি:
console.log(userName);
console.log(name);
console.log(getUserName());

// Default export :

console.log(greet("Karim"));
console.log(sayHello("Marima"));

// মনে রাখবে: ES Modules ব্যবহার করার জন্য project-এর module configuration ঠিক থাকতে হবে। আধুনিক React tooling সাধারণত এটি সামলে দেয়।
