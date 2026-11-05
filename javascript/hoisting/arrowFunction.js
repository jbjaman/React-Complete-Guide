greet();

const greet = () => {
  console.log("Hi !"); // Output: ReferenceError
};

// Arrow function হওয়ায় hoisting-এর বিশেষ ছাড় নেই। এখানে greet একটি const binding, যা initialization-এর আগে access করা হয়েছে।

greeting();

let greeting = () => {
  console.log("How are you !"); // Output: ReferenceError
};

greeting2();

var greeting2 = () => {
  console.log("How are you !"); // Output: TypeError
};
