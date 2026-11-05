// Function factory মানে এমন একটি function, যেটি অন্য function তৈরি করে return করে।

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(double(8)); // 16

console.log(triple(5)); // 15
console.log(triple(8)); // 24

// double কেন সবসময় factor = 2 ব্যবহার করে? আর triple কেন factor = 3 ব্যবহার করে?

// কারণ প্রতিটি multiplyBy() call নিজস্ব factor binding তৈরি করেছে। Returned function closure-এর মাধ্যমে সেই binding ব্যবহার করে।

// এ ধরনের function-কে higher-order function-এর উদাহরণ হিসেবেও দেখা যায়, কারণ multiplyBy() একটি function return করছে।

// React-এ event handler বা reusable function তৈরি করার সময় এই ধারণা কাজে লাগে।
