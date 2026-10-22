// একটি let বা const binding-এর scope শুরু হওয়া থেকে তার declaration initialize হওয়া পর্যন্ত সময়কে TDZ বলা হয়।

{
  // TDZ শুরু হয়েছে
  //   console.log(score); // output: ReferenceError

  let score = 100; // score initialize হলো

  console.log(score); // output: 100
}

// Timeline মনে রাখো:

// Block শুরু
// score binding আছে, কিন্তু initialize হয়নি। এটি TDZ-এর সময়।
// let score = 100 execute হলো
// এখন score initialize হয়েছে এবং value 100।

// const-ও declaration initialize হওয়ার আগে access করা যায় না। তাছাড়া const declare করার সময় initialize করা বাধ্যতামূলক:
const age; // SyntaxError
const age = 20; // সঠিক
