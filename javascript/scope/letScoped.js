// let age = 546;
// let age = 56;

// Output: SyntaxError

// কারণ একই scope-এ let দিয়ে একই নাম পুনরায় declare করা যায় না।

// তবে আলাদা nested scope-এ shadowing সম্ভব:

let userId = 45;

{
  let userId = 69;
  console.log(userId); // Output: 69
}

console.log(userId); // Output: 45

// এখানে দুটি আলাদা lexical binding আছে।
