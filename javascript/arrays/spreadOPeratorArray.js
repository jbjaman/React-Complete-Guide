const first = [1, 2, 3];

const second = [...first, 4, 5];

console.log(second); // [1, 2, 3, 4, 5]

// ...first Array-এর element-গুলোকে নতুন Array-এর মধ্যে ছড়িয়ে দিয়েছে।

// একটি Array copy করার উদাহরণ:

const original = [10, 20, 30];
const copy = [...original];

copy.push(40);

console.log(original); // [10, 20, 30]
console.log(copy); // [10, 20, 30, 40]

// এটি একটি shallow copy। Nested Object বা Array থাকলে ভেতরের reference একই থাকতে পারে।
