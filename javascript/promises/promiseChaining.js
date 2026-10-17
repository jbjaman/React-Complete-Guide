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
