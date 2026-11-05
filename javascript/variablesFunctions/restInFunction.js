function sum(...numbers) {
  return numbers.reduce((acc, number) => {
    acc = acc + number;
    return acc;
  }, 0);
}

console.log(sum(2, 4, 5, 6, 3));

// এখানে ...numbers যতগুলো extra argument এসেছে, সেগুলোকে একটি Array-তে সংগ্রহ করেছে।

// Rest parameter-কে function-এ অন্য সাধারণ parameter-এর পরে রাখতে হয়, এবং একটি function declaration-এ একটিই Rest parameter থাকতে পারে।

function greet(message, ...names) {
  console.log(message); // Hello
  console.log(names); // ["Rahim", "Karim"]
}

greet("Hello", "Rahim", "Karim");
