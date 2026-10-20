//  reduce() মেথডের গঠন বা Syntax মূলত ৩টি মূল অংশে বিভক্ত:

/**
 * array.reduce((accumulator, currentValue) => {
  // হিসাব বা লজিক
  return accumulator;
}, initialValue);
 * 
 * 
 * ১. Callback Function (accumulator, currentValue) => { ... }
 * 
 * - accumulator (জমা খাতা): এটি একটি পাত্র বা খাতার মতো। আগের ধাপে আপনি যা হিসাব করে return করেছেন, তা এই accumulator-এ এসে জমা থাকে।
 * - currentValue (বর্তমান মান): অ্যারে ঘোরার সময় বর্তমানে যে উপাদানটির ওপর কোডটি কাজ করছে (যেমন: ১ম উপাদান, ২য় উপাদান...)।
 * 
 * 
 * 2. Callback ফাংশনের ভেতর যা হিসাব করবেন, তা অবশ্যই return করতে হবে। কারণ আপনার return করা মানটিই পরবর্তী ধাপে গিয়ে আবার accumulator-এর মধ্যে জমা হবে।
 * 
 * ৩. initialValue (শুরুর মান) : ফাংশনের একদম শেষে (কমাদিয়ে) এই মানটি দিতে হয়।
 * accumulator-এর শুরুতে মান কত থাকবে, তা এটি নির্ধারণ করে।
 * যোগফলের ক্ষেত্রে এটি সাধারণত 0 দেওয়া হয়, গুণ করার ক্ষেত্রে 1 দেওয়া হয়, আর
 * অবজেক্ট বানাতে চাইলে {} দেওয়া হয়।
 * 
*/
const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(total); // 600

console.log(prices); // [100, 200, 300]

// JavaScript-এ reduce() মেথডটির কাজ হলো একটি অ্যারের সব উপাদানকে প্রসেস করে একক একটি ফলাফলে (Single Value) রূপান্তর করা (যেমন: সবগুলো সংখ্যার যোগফল বের করা)।

// reduce() মূলত ৪টি বিষয় নিয়ে কাজ করে:

/**
 * 1. sum (Accumulator): এটি একটি জমা খাতা বা ব্যাগের মতো, যেখানে প্রতি ধাপে হিসাবের ফলাফল জমা থাকে।
 *
 * 2. price (Current Value): অ্যারের বর্তমান সংখ্যাটি
 *
 * 3. 0 (Initial Value): sum-এর শুরুর মান বা প্রারম্ভিক জমা।
 *
 * 4. return sum + price;: বর্তমান সংখ্যাটি আগের জমার সাথে যোগ করে পরবর্তী ধাপের জন্য জমা রাখা।
 *
 */

// Use reduce to count how many times each word appears in an array.??

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// reduce() দিয়ে একটি অ্যারেতে কোন শব্দ কতবার আছে তা গণনার কাজটিকে বলা হয় Frequency Count।

// এখানে মূল ট্রিক হলো: reduce()-এর প্রারম্ভিক মান (Initial Value) হিসেবে একটি খালি অবজেক্ট {} সেট করতে হবে, যেন অবজেক্টটির ভেতরে আমরা প্রতিটি শব্দের গণনার হিসাব (Key-Value pair হিসেবে) জমা রাখতে পারি।

const wordCount = words.reduce((acc, word) => {
  // যদি শব্দটা আগে থেকেই অবজেক্টে থাকে, তবে তার মান ১ বাড়াবে।
  // আর যদি না থাকে, তবে ০ ধরে তার সাথে ১ যোগ করবে (অর্থাৎ ১ সেট করবে)।
  acc[word] = (acc[word] || 0) + 1;

  return acc; // প্রতিটি ধাপে আপডেট হওয়া অবজেক্টটি ফেরত দেবে
}, {}); // প্রারম্ভিক মান (Initial Value) একটি খালি অবজেক্ট {}

console.log(wordCount); // { apple: 3, banana: 2, orange: 1 }

// Senior-level সতর্কতা: এই উদাহরণে || কাজ করছে, কারণ count একটি positive number বা undefined। সাধারণ ক্ষেত্রে || ও ?? এক নয়
