// Function বাইরে চলে গেলেও variable কীভাবে মনে থাকে?

function outer() {
  const name = "Karim"; // name = "Karim" তৈরি হয়

  // এবং inner function define হয়।

  function inner() {
    console.log(name);
  }

  return inner; // এখানে inner() call করা হয়নি। Function-টিকেই return করা হয়েছে।
}

const myFunction = outer(); // myFunction-এর মধ্যে returned inner function-এর reference থাকে।

myFunction(); // inner এখনও তার outer lexical environment-এর name variable access করতে পারে।

// Output: Karim
