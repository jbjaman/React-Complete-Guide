// একটি let বা const binding-এর scope শুরু হওয়া থেকে তার declaration initialize হওয়া পর্যন্ত সময়কে TDZ বলা হয়।

{
  // TDZ শুরু হয়েছে
  //   console.log(score); // output: ReferenceError

  let score = 100; // score initialize হলো

  console.log(score); // output: 100
}
