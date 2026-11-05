// Deep Copy হলো এমন এক ধরণের কপি, যা অবজেক্টের ভেতরের সব লেভেল (Nested Object/Array সহ) সম্পূর্ণ নতুন করে তৈরি করে। এতে মূল অবজেক্টের সাথে নতুন অবজেক্টের আর কোনো সম্পর্ক বা লিংক থাকে না।

// Deep Copy করার উপায়:
// structuredClone() ব্যবহার করে (আধুনিক JS-এর সেরা উপায়):

const user1 = { name: "Rafi", address: { city: "Dhaka" } };

// Deep Copy করলাম
const user2 = structuredClone(user1);

// এখন ভেতরের লেভেল পরিবর্তন করলেও আসলটা বদলাবে না
user2.address.city = "Chittagong";

console.log(user1.address.city); // "Dhaka" (অক্ষত রয়ে গেছে!)
console.log(user2.address.city); // "Chittagong"

// ডেটা যদি Nested বা বহুমাত্রিক হয় → Deep Copy (structuredClone()) ব্যবহার করবেন।

// Deep copy করলে nested object-গুলোরও আলাদা copy তৈরি হয়।

/**
 *
 * তবে মনে রাখবে:
 * - structuredClone() সাধারণ object, array ও অনেক built-in data type-এর জন্য কাজ করে।
 * - Function এবং কিছু বিশেষ object clone করা যায় না।
 * - Circular reference থাকলেও structuredClone() অনেক ক্ষেত্রে সেটি handle করতে পারে।
 * - JSON stringify/parse সব ধরনের data-এর জন্য নির্ভরযোগ্য deep-copy পদ্ধতি নয়।
 *
 */
