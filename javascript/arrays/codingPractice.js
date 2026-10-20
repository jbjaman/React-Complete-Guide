// Challenge 1 — Double the numbers

// [2, 4, 6, 8] থেকে map() ব্যবহার করে [4, 8, 12, 16] তৈরি করো।

const numbers = [2, 4, 6, 8];

const doubleNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubleNumbers);

// Challenge 2 — Filter passing scores

// [35, 70, 45, 90, 25] থেকে শুধু ৫০ বা তার বেশি score রাখো।

const numbers2 = [35, 70, 45, 90, 25];

const passingScore = numbers2.filter((number) => {
  return number >= 50;
});

console.log(passingScore);

// Challenge 3 — Find a user

// id = 3 এমন user খুঁজে বের করো। User না থাকলে কী ফেরত আসে, সেটিও বোঝাও।

const users = [
  { id: 1, name: "Rahim" },
  { id: 2, name: "Karim" },
  { id: 3, name: "Mahin" },
];

const findUser = users.find((user) => {
  return user.id === 3;
});

console.log(findUser);

const noUsers = [];

const nofindUser = noUsers.find((user) => {
  return user.id === 3;
});

console.log(nofindUser); // Undefined -> কারণ empty array

// Challenge 4 — Calculate total

// [120, 250, 80, 50] array-এর সব সংখ্যা reduce() দিয়ে যোগ করো।

const values = [120, 250, 80, 50];

const total = values.reduce((acc, value) => {
  return (acc = acc + value);
}, 0);

console.log(total); // 500

// Challenge 5 — Count occurrences

// ["a", "b", "a", "c", "b", "a"] থেকে প্রতিটি letter-এর frequency object তৈরি করো।

const words = ["a", "b", "a", "c", "b", "a"];

const countWords = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(countWords); // { a: 3, b: 2, c: 1 }

// Challenge 6 — Product pipeline

// Stock-এ থাকা product-গুলো filter করে তাদের name-এর array তৈরি করো।

const products = [
  { name: "Keyboard", price: 1000, inStock: true },
  { name: "Mouse", price: 500, inStock: false },
  { name: "Monitor", price: 10000, inStock: true },
];

const inStockProduct = products
  .filter((product) => {
    return product.inStock;
  })
  .map((product) => {
    return product.name;
  });

console.log(inStockProduct);
