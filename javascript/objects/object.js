// Array দিয়ে আমরা একাধিক value রাখি। Object দিয়ে আমরা কোনো entity-এর বৈশিষ্ট্যগুলোকে key: value আকারে রাখি।

const applicant = {
  name: "Rafi",
  age: 21,
  skills: ["JavaScript", "React"],
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

// name, age, skills, address হলো property key।
// "Rafi", 21 ইত্যাদি হলো property value।
// address-এর ভিতরে আরেকটি object আছে। এটিকে nested object বলে।

// Property কীভাবে access করবে?

console.log(applicant.name); // Rafi
console.log(applicant["age"]); // 21
console.log(applicant.skills[0]); // Dhaka
console.log(applicant.address.city); // JavaScript

// applicant.key লিখলে JavaScript key নামে property খুঁজবে। কিন্তু applicant[key] লিখলে variable key-এর value "name" ব্যবহার করবে।

// 2. Object-এর keys(), values() ও entries()

// ধরো, তুমি একটি object-এর সব property দেখতে চাও।

const user2 = {
  name: "Rafi",
  age: 21,
  city: "Dhaka",
};

console.log(Object.keys(user2)); // property-গুলোর নাম দরকার হলে।
// ["name", "age", "city"]
console.log(Object.values(user2)); // property-গুলোর value দরকার হলে।
// ["Rafi", 21, "Dhaka"]
console.log(Object.entries(user2)); // key এবং value দুটোই দরকার হলে।
// [["name", "Rafi"], ["age", 21], ["city", "Dhaka"]]

// Interview-এ এমন প্রশ্ন আসতে পারে: object-এর সব property-এর নাম এবং value print করো।

for (const [key, value] of Object.entries(user2)) {
  console.log(key, value);
}
