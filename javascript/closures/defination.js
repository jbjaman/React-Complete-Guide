/**
 * একটি function এবং সেই function-এর lexical environment-এর মধ্যে যে সম্পর্ক থাকে,
 * যার মাধ্যমে function তার বাইরের scope-এর variable access করতে পারে,
 * সেটিই closure-এর মূল ধারণা।
 * সহজ ভাষায়: একটি function তার যেখানে define হয়েছে,
 * সেই বাইরের scope-এর variable-গুলোর সঙ্গে সম্পর্ক ধরে রাখতে পারে—এমনকি
 * function-টি সেই scope-এর বাইরে থেকে call হলেও।
 */

return inner; // Function-টিকে return করে

return inner(); // inner function-কে এখনই call করে তার result return করে
