const user = {
  name: "Rahim",
  age: 22,
  city: "Dhaka",
};

const { name, ...remaining } = user;

console.log(name); // Rahim

console.log(remaining); // { age: 22, city: "Dhaka" }
