// async কী?
// JavaScript-এ async keyword ব্যবহার করে একটি async function declare করা যায়।

aync function greet(){
    return "Hello !"
}

console.log(greet());

// greet() সরাসরি "Hello!" string return করছে না। এটি একটি Promise return করছে, যার fulfillment value "Hello!"।

async function greet() {
  return "Hello!";
}

greet().then((message) => {
  console.log(message); // Hello!
});

// async function-এর ভেতরে return করলে কী হয়?

async function getNumber() {
  return 42;
}

// এটিকে ধারণাগতভাবে এভাবে ভাবতে পারো:

// function getNumber() {
//   return Promise.resolve(42);
// }

// এটি ধারণা বোঝানোর জন্য। সব ধরনের async function-কে সরলভাবে এই code দিয়ে replace করা যায় না, বিশেষ করে error এবং Promise handling-এর ক্ষেত্রে।

// Interview answer: An async function always returns a Promise. If it returns a non-Promise value, that value becomes the fulfillment value of the returned Promise.