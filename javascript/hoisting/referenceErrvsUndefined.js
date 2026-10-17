// ReferenceError বনাম undefined

var user;

console.log(user); // Output: undefined

// Variable declare করা হয়েছে, তাই সেটি access করা যাচ্ছে। কিন্তু কোনো value assign করা হয়নি।

{
  console.log(userName); // Output: ReferenceError
  let userName = "Karim";
}

// user-এর binding আছে, কিন্তু initialization-এর আগে access করা হয়েছে।

console.log(userAddress); // Output: ReferenceError

// যদি userAddress কোনো accessible scope-এ declare না করা থাকে, তাহলে ReferenceError হবে।

// অর্থাৎ undefined সাধারণত একটি value; ReferenceError হলো execution-এর সময় variable access করতে গিয়ে হওয়া error।
