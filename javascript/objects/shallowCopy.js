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
