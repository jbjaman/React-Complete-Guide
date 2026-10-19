// Primitive -> Pass by value

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// Object Reference

const user1 = { name: "Rafi" };

const user2 = user1; // ->  অনেকটা এমন যে  user1 এর নতুন নাম দিচ্ছি user2

user2.name = "Nila";

//  -> object একটাই just নাম ২ টা দিয়া বুঝাইতেছি

console.log(user1.name); // Nila
console.log(user2.name); // Nila

// এখানে দুই variable একই object-কে reference করছে। তাই object-এর property পরিবর্তন করলে দুই variable দিয়ে দেখলেও পরিবর্তনটি দেখা যায়।

console.log({ name: "Nila" } === { name: "Nila" }); // false

// দুটি object-এর content একই হলেও object দুটি আলাদা।
// === object-এর content তুলনা না করে reference identity তুলনা করে।
