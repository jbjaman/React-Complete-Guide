// Shallow Copy হলো এমন এক ধরণের কপি, যা অবজেক্ট বা অ্যারের একদম উপরের স্তরের (First Level) প্রোপার্টিগুলোকে আলাদা করে কপি করে, কিন্তু ভেতরে যদি কোনো Nested Object বা Array থাকে, সেগুলোর শুধু ঠিকানা (Reference) ধরে রাখে।

// Shallow Copy করার উপায়:
// Spread Operator (...) বা Object.assign() ব্যবহার করে।

const user1 = { name: "Rafi", address: { city: "Dhaka" } };

// Shallow Copy করলাম
const user2 = { ...user1 };

// ১ম লেভেলের প্রোপার্টি পরিবর্তন
user2.name = "Sami";
console.log(user1.name); // "Rafi" (ঠিক আছে, user1 বদলায়নি)

// ২য় লেভেলের (Nested) প্রোপার্টি পরিবর্তন
user2.address.city = "Chittagong";
console.log(user1.address.city); // "Chittagong" (সমস্যা! user1 এর ভেতরটাও বদলে গেছে)

// কারণ Shallow copy শুধু প্রথম লেভেলের name-কে আলাদা মেমোরিতে নিয়েছে, কিন্তু ভেতরের address অবজেক্টটির আসল কপি তৈরি করেনি (তার Reference রেখে দিয়েছিল)।

// ডেটা যদি Flat বা এক লেভেলের হয় -> Shallow Copy (...spread) ব্যবহার করবেন।

// Does [...arr] make a deep copy?

/***
 * না, [...arr] (Spread Operator) Deep Copy তৈরি করে না। এটি একটি Shallow Copy তৈরি করে।
 *
 * Spread Operator (...) কেবল অ্যারের একদম উপরের স্তরের (First Level বা Top Level) উপাদানগুলোকে কপি করে নতুন একটি অ্যারে তৈরি করে।
 *
 * যদি অ্যারেতে Primitive Value থাকে (যেমন: Number, String, Boolean):
তখন মনে হতে পারে এটি একদম স্বাধীনভাবে কপি হয়েছে, কারণ Primitive Value গুলোর সরাসরি মান কপি হয়।
 *
 *
 *const arr1 = [10, 20, 30];
const arr2 = [...arr1];

arr2[0] = 99;

console.log(arr1); // [10, 20, 30] (অক্ষত আছে)
console.log(arr2); // [99, 20, 30]
 * 
 * যদি অ্যারের ভেতরে Nested Object বা Nested Array থাকে (Non-primitive):
তখনই মূল সমস্যাটা ধরা পড়ে! [...arr] ভেতরের অবজেক্ট বা অ্যারেগুলোর নতুন কপি তৈরি করে না, বরং সেগুলোর মেমোরি অ্যাড্রেস (Reference)-ই কপি করে রেখে দেয়।
 * 
 * 
 * const originalArr = [
  { name: "Rafi" }, 
  { name: "Nila" }
];

// Spread Operator দিয়ে কপি করা হলো (Shallow Copy)
const copiedArr = [...originalArr];

// কপি করা অ্যারের ১ম অবজেক্টের নাম পরিবর্তন করলাম
copiedArr[0].name = "Sami";

// আসল অ্যারে চেক করি:
console.log(originalArr[0].name); // Output: "Sami" (আসলটাও বদলে গেছে!)
 * 
 * 
 * [...originalArr] ব্যবহারের ফলে বাইরের অ্যারের জন্য একটি নতুন মেমোরি তৈরি হলেও, ভেতরের { name: "Rafi" } অবজেক্টটি কিন্তু আলাদাভাবে কপি হয়নি। দুটি অ্যারে-ই ভেতরের একই অবজেক্টকে পয়েন্ট করে আছে। ফলে এক জায়গায় চেঞ্জ করলে অন্য জায়গায়ও বদলে যাচ্ছে।
 * 
 *যদি আপনার অ্যারেতে Nested Object বা Multi-dimensional Array থাকে এবং আপনি চান মূল অ্যারের সাথে কোনো সংযোগই না থাকুক, তবে আধুনিক JavaScript-এ structuredClone() ব্যবহার করতে হবে:
 * 
 * 
 * const originalArr = [
  { name: "Rafi" }, 
  { name: "Nila" }
];

// আসল Deep Copy
const deepCopiedArr = structuredClone(originalArr);

deepCopiedArr[0].name = "Sami";

console.log(originalArr[0].name); // Output: "Rafi" (আসলটি একদম নিরাপদ ও অক্ষত!)
console.log(deepCopiedArr[0].name); // Output: "Sami"
 * 
 * 
 * 
 * 
 * 
 * এক নজরে সারসংক্ষেপ:
[...arr] (Spread Operator): Shallow Copy করে (শুধু ১ম লেভেল কপি হয়, ভেতরের অবজেক্টগুলোর রেফারেন্স থেকে যায়)।

structuredClone(arr): Deep Copy করে (সব লেভেল সম্পূর্ণ স্বাধীনভাবে নতুন করে তৈরি হয়)।
 * 
 * 
 * 
 * 
 * 
 */
