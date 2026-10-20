// Spread operator (...) দিয়ে Object Copy

const original = {
  name: "Rafi",
  age: 21,
};

const copy = { ...original };

copy.age = 45;

console.log(copy.name);
console.log(original.name);
console.log(original.age);
console.log(copy.age);

// এখানে নতুন object তৈরি হয়েছে। কিন্তু একটি গুরুত্বপূর্ণ সীমাবদ্ধতা আছে: spread operator শুধু shallow copy করে।

// 7. Interview-এ Object Update কীভাবে করবে?

// ধরো, user-এর age পরিবর্তন করতে হবে, কিন্তু original object mutate করা যাবে না।

const user = {
  name: "Rafi",
  age: 21,
  city: "Dhaka",
};

const newUser = { ...user, age: 22 };

console.log(newUser); //

console.log(user);

// Object-এর spread-এর পরে নতুন property দিলে সেটি পুরোনো property-কে override করে।

// Interview question: দুটি object merge করলে কোনটির value অগ্রাধিকার পাবে?

// উত্তর: একই key একাধিকবার থাকলে spread order অনুযায়ী পরের value-টি আগেরটিকে override করে।

const defaults = {
  theme: "light",
  language: "en",
};

const preferences = {
  theme: "dark",
};

const settings = { ...defaults, ...preferences };

console.log(settings);
