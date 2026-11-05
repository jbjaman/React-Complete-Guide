// Promise chaining মানে একটি Promise-এর result নিয়ে পরের কাজ করা, তারপর তার result দিয়ে আরও কাজ করা।

Promise.resolve(5)
  .then((value) => {
    console.log(value); // 5
    return value * 2; // return না করলে undefined
  })
  .then((value) => {
    console.log(value); // 10
    return value + 3;
  })
  .then((value) => {
    console.log(value); // 13
  });
// --------------------->

Promise.resolve(5)
  .then((value) => {
    value * 2;
  })
  .then((value) => {
    console.log(value);
  });

// undefined -> প্রথম .then()-এর callback কোনো value return করেনি। তাই তার return করা Promise fulfilled হয়েছে undefined দিয়ে।

// সঠিক version:

Promise.resolve(5)
  .then((value) => {
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 10
  });

//   এক লাইনের arrow function হলে implicit return-ও করা যায়:

Promise.resolve(5)
  .then((value) => value * 2)
  .then((value) => console.log(value));

//   Chain-এর মধ্যে Promise return করা

function getNumber() {
  return Promise.resolve(10);
}

getNumber()
  .then((value) => {
    return Promise.resolve(value + 5);
  })
  .then((value) => {
    console.log(value); // Output: 15
  });

//   .then() callback যদি Promise return করে, তাহলে পরবর্তী .then() সেই Promise-এর settled result পাওয়ার পরে এগোয়। একে Promise assimilation বা Promise chaining-এর আচরণ হিসেবে বোঝা যায়।

// Promise chain-এর প্রতিটি .then() নতুন একটি Promise return করে। তাই return না করলে পরের .then()-এ expected value না-ও পেতে পারো।

// Promise Chain-এ Error কীভাবে propagate করে?

Promise.resolve(10)
  .then((value) => {
    console.log(`Step 1: ${value}`);
    throw new Error("Something failed");
  })
  .then((value) => {
    console.log(`Step 2: ${value}`);
  })
  .catch((error) => {
    console.log("Caught:", error.message);
  });

// Step 1: 10
// Caught: Something failed

// Step 2 print হয়নি কেন?

// প্রথম .then()-এর callback error throw করেছে। ফলে chain rejected হয়েছে। এরপরের success handler skip হয়েছে এবং control .catch()-এ পৌঁছেছে।

// Promise chain-এ rejection handle না হওয়া পর্যন্ত পরবর্তী success handlers skip হতে থাকে। কোনো .catch() error handle করলে তার return value দিয়ে chain আবার fulfilled হতে পারে।

// Error handle করার পর chain আবার চালানো:

Promise.reject("Failed")
  .catch((error) => {
    console.log("Handled:", error);
    return "Recovered";
  })
  .then((value) => {
    console.log("Next:", value);
  });

// Handled: Failed
// Next: Recovered

// এখানে .catch() error handle করে "Recovered" return করেছে। ফলে পরবর্তী .then() success path-এ execute হয়েছে।
