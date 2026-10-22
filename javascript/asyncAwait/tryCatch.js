// Error handling হলো program-এ কোনো operation ব্যর্থ হলে সেটি কীভাবে সামলাবে, তার ব্যবস্থা।

//প্রথমে synchronous error দেখি:

try {
  // try block শুরু হয়।
  console.log("Before error");
  // "Before error" print হয়।
  throw new Error("Something went wrong");
  //   throw একটি error ছুড়ে দেয়।
  // try block-এর বাকি অংশ skip হয়।
  console.log("After error");
} catch (error) {
  // catch error-টি গ্রহণ করে।
  console.log("Caught:", error.message);
}
// catch শেষ হলে program পরের statement চালাতে পারে।
console.log("Program continues");

// Before error
// Caught: Something went wrong
// Program continues

// Error object কী?

const error = new Error("User not found");
console.log(error.message);

// User not found

// সাধারণত error message দেখার জন্য error.message ব্যবহার করা হয়। বাস্তব code-এ error object-এর অন্যান্য তথ্যও থাকতে পারে, যেমন name ও stack।

// try/catch কি সব error ধরে?
// না। try/catch সাধারণত সেই synchronous error ধরে, যা try block-এর মধ্যে throw হয়। Promise বা asynchronous operation-এর error handle করার নিয়মও বুঝতে হবে।

try {
  setTimeout(() => {
    throw new Error("Timer error");
  }, 0);
} catch (error) {
  console.log("Caught:", error.message);
}
// এই catch timer callback-এর error ধরবে না। কারণ callback execute হওয়ার সময় try/catch block-এর synchronous execution শেষ হয়ে গেছে।

// Timer callback-এর ভেতরেই error handle করতে হলে:

setTimeout(() => {
  try {
    throw new Error("Timer error");
  } catch (error) {
    console.log("Caught:", error.message);
  }
}, 0);

// Caught: Timer error
