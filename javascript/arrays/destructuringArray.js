const user = ["Rahim", 22, "Developer"];

const [name, age, job] = user;
// Array destructuring-এ position বা index অনুযায়ী value assign হয়।
console.log(name);
console.log(age);
console.log(job);

// কোনো value skip করা

const user2 = ["Mahim", 22, "Developer"];

const [name2, , job2] = user2;

console.log(name2);
console.log(job2);

// Default value

// Array-তে প্রয়োজনীয় value না থাকলে default value দেওয়া যায়।

const user3 = ["Sahin"];

const [name3, age3 = 23] = user3;

console.log(name3);
console.log(age3);

// গুরুত্বপূর্ণ: Default value শুধু value undefined হলে ব্যবহৃত হয়। Value null হলে default value বসে না।

const [a = 10] = [undefined];
const [b = 10] = [null];

console.log(a); // 10
console.log(b); // null

// Destructuring-এ Rest

const numbers45 = [10, 20, 30, 40, 50, 60];

const [first, second, third, ...remaining] = numbers45;

console.log(first); // 10
console.log(second); // 20
console.log(third); // 30
console.log(remaining); // [40,50,60]
