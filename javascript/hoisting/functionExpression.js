sayHello();

var sayHello = function () {
  console.log("Hello!"); // Output: TypeError
};

// var sayHello declaration hoisted হয়েছে এবং শুরুতে sayHello-এর value undefined। প্রথম লাইনে JavaScript undefined() call করার চেষ্টা করে, যা সম্ভব নয়। তাই TypeError হয়।

sayBye();

let sayBye = function () {
  console.log("Bye !"); // Output: ReferenceError
};

// এখানে sayBye TDZ-তে আছে। তাই function call করার চেষ্টা করার আগেই variable access-এ error হয়।
