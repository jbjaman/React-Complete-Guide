function outer() {
  const name = "Rahim"; // outer()-এর ভেতরে name variable তৈরি হয়েছে।

  // inner() function-ও outer()-এর ভেতরে define করা হয়েছে।
  function inner() {
    // inner() যখন name ব্যবহার করেছে, JavaScript তার নিজের scope-এ name পায়নি।
    console.log(name); // Output: Rahim
  }
  inner(); // তাই JavaScript বাইরের lexical scope-এ খুঁজেছে এবং name পেয়েছে।

  /**
   * এখানে inner() তার বাইরের scope-এর variable access করতে পারছে,
   * কারণ function কোথায় define হয়েছে, সেটি তার lexical scope নির্ধারণ করে।
   */
}

outer(); // outer() call হয়েছে।
