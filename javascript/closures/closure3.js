// Closure কীভাবে variable-এর value ধরে রাখে?

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner; // Output : 1 2 3
  // return inner(); // Output : TypeError: counter is not a function
}

const counter = outer(); // inner function-এর reference

// প্রতিটি call-এ একই variable update হচ্ছে

counter();
counter();
counter();

// (Closure) হলো এমন একটি মেকানিজম, যার মাধ্যমে একটি ইনার (inner) ফাংশন তার আউটার (outer) ফাংশনটি এক্সিকিউট বা শেষ হয়ে যাওয়ার পরও আউটার ফাংশনের ভ্যারিয়েবলগুলোকে মনে রাখতে পারে এবং অ্যাক্সেস করতে পারে।

// সহজ কথায়, জাভাস্ক্রিপ্ট ফাংশনগুলো যে এনভায়রনমেন্ট বা স্কোপে তৈরি হয়, তারা সেই জায়গার ভ্যারিয়েবলগুলোকে কখনোই ভুলে যায় না।
