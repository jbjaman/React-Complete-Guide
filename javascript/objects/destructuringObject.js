// Object-এর ক্ষেত্রে Array-এর মতো position নয়, property name গুরুত্বপূর্ণ।

const user = {
  name: "Rahim",
  age: 22,
  job: "Developer",
};

const { name, age, job } = user;

console.log(name);
console.log(age);
console.log(job);

// Property-এর নাম বদলে variable বানাতে পারো:

const user2 = {
  name: "Karim",
  age: 25,
  job: "React Developer",
};

const { name: userName, age: userAge, job: role } = user2;

console.log(userName);
console.log(userAge);
console.log(role);

// এখানে name: userName মানে Object-এর name property থেকে value নিয়ে userName variable তৈরি করা। এটি Object-এর property rename করছে না।

// Nested destructuring

const user3 = {
  name: "Samim",
  address: {
    city: "Dhaka City",
    country: "Bangladesh",
  },
};

const {
  address: { city },
} = user3;

console.log(city);
// এখানে city সরাসরি পাওয়া যাচ্ছে nested address Object থেকে।

// সতর্কতা: address না থাকলে এই destructuring error দিতে পারে। তাই data-এর structure নিশ্চিত না হলে আগে validation বা safe access ব্যবহার করা দরকার।

const user99 = {
  name: "Jashim",
  age: 32,
};

const copyUser99 = { ...user99, age: 45 };

console.log(copyUser99); // { name: "Jashim", age: 45 }

// Property override-এর নিয়ম: একই property পরে দিলে সাধারণত পরের value-টাই থাকে।

const a = { age: 22 };
const b = { ...a, age: 25 };

console.log(b.age);
