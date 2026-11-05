function createAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },

    getBalance() {
      return balance;
    },
  };
}

const account = createAccount();

console.log(account.getBalance()); // 1000
console.log(account.deposit(500)); // 1500
console.log(account.getBalance()); // 1500

console.log(account.balance); // undefined

// account.balance কেন undefined?

// কারণ balance হলো createAccount()-এর local variable। Return করা object-এর balance নামে কোনো property তৈরি করা হয়নি। তবে deposit() ও getBalance() closure-এর মাধ্যমে ওই variable access করতে পারে।

// এটিকে closure-এর মাধ্যমে data privacy বা encapsulation-এর একটি উদাহরণ বলা যায়।

// কখন এই technique কাজে লাগতে পারে?
// - কোনো internal value সরাসরি expose না করতে।
// - Counter বা stateful utility বানাতে।
// - Function-এর call-এর মধ্যেও নির্দিষ্ট state ধরে রাখতে।
// - Callback-কে বাইরের কিছু variable ব্যবহার করতে দিতে।
// তবে সব private state closure দিয়ে বানাতেই হবে এমন নয়। JavaScript-এ class-এর private fields (#balance) এবং অন্যান্য design-ও রয়েছে।
