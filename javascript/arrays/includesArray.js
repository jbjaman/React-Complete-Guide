const skills = ["JavaScript", "React", "Node.js"];

// console.log(skills.includes("React")); // true
// console.log(skills.includes("Python")); // false

// এটি exact value খোঁজে। Object-এর content মিলিয়ে খোঁজে না; object reference তুলনা করে।

// console.log([{ id: 1 }].includes({ id: 1 })); // false
//  কারণ দুটি object আলাদা reference।

// Problem Solving: Product filtering ও transformation

// -> ধরো, তোমার কাছে একটি product list আছে। তোমাকে শুধু stock-এ থাকা product বেছে নিতে হবে, তারপর প্রতিটির discounted price বের করতে হবে।

const products = [
  { name: "Keyboard", price: 1000, inStock: true },
  { name: "Mouse", price: 500, inStock: false },
  { name: "Monitor", price: 10000, inStock: true },
];

const availableInStock = products.filter((product) => {
  if (product.inStock) {
    return product;
  }
});

console.log(availableInStock);

const discountedPrice = availableInStock.map((product) => {
  discount = product.price * 0.9;
  return {
    name: product.name,
    discountedPrice: discount,
  };
});

console.log(discountedPrice);
