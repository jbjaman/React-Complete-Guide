// ধরো, কোনো user নিজের নাম দেয়নি। তুমি default নাম "Guest" দিতে চাও।

const name = undefined ?? "Guest";

console.log(name);

// ?? ডান পাশের default value ব্যবহার করে যখন বাম পাশ null অথবা undefined হয়।

console.log(0 || 100); // 100
console.log(0 ?? 100); // 0

console.log("" || "Guest"); // "Guest"
console.log("" ?? "Guest"); // ""

console.log(false || true); // true
console.log(false ?? true); // false

// Fallback (ফলব্যাক) মানে হলো "বিকল্প ব্যবস্থা" বা "প্ল্যান-বি (Plan B)"।

// যখন আসল বা প্রধান ব্যবস্থাটি কোনো কারণে কাজ করে না, ব্যর্থ হয় বা কোনো তথ্য পাওয়া যায় না, তখন যেন পুরো সিস্টেমটা বন্ধ না হয়ে একটি বিকল্প উপায় ধরে কাজ চালিয়ে নিতে পারে—সেই বিকল্প উপায় বা মানটিকেই বলা হয় Fallback। মূল উদ্দেশ্য: সিস্টেম যেন ক্র্যাশ বা ভেঙে না পড়ে। অর্থ: "আসলটা না পেলে বিকল্প যেটা ব্যবহার করা হবে।"
