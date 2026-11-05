if (true) {
  let a = 10;
  var b = 20;
}

console.log(b); // 20 -> var function scope
console.log(a); // ReferenceError -> let block scope

// Interview question: const দিয়ে declare করা object-এর property কি পরিবর্তন করা যায়?

const user = {
    name: "Rahim",
    age: 34;
}

user.name = "Karim" // valid -> property change
user.age = 12 // valid -> property change

user = { // TypeError -> object reassing
    name: "Mahin",
    age: 45;
}

// কারণ const variable-টিকে অন্য object দিয়ে reassign করতে বাধা দেয়; object-এর property পরিবর্তন করতে নয়। React state-এর ক্ষেত্রে অবশ্য state object সরাসরি mutate না করে নতুন object তৈরি করতে হয়।