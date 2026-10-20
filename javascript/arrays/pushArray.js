const numbers = [10, 20, 30];

console.log("Push Value", numbers.push(40)); // 4

// JavaScript-এ push() মেথডটির কাজ হলো অ্যারের (Array) শেষে নতুন কোনো Element বা উপাদান যুক্ত করা। তবে push() মেথডটি রিটার্ন (Return) করে অ্যারের নতুন Total Length (দৈর্ঘ্য), অ্যারেটি নিজে নয়।

// কোনো নতুন অ্যারে তৈরি না হয়ে মূল numbers অ্যারেটিই বদলে গেছে। তাই এটি একটি Mutable Method।

console.log(numbers); // [10, 20, 30, 40]

// আপনি যদি মূল অ্যারে পরিবর্তন না করতে চান (Immutable উপায়ে করতে চান):

const newNumbers = [...numbers, 50];

// Spread operator (...) ব্যবহার করে মূল অ্যারে অপরিবর্তিত রাখা

console.log(numbers); // [10, 20, 30, 40] (মূল অ্যারে একই আছে)
console.log(newNumbers); // [10, 20, 30, 40, 50] (নতুন অ্যারে তৈরি হয়েছে)
