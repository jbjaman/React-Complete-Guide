const users = [
  // Array of Object
  { id: 1, name: "Rafi" },
  { id: 2, name: "Nila" },
  { id: 3, name: "Sami" },
];

const user = users.find((singleUser) => singleUser.id === 2);

console.log(user); // { id: 2, name: 'Nila' }
console.log(users);
//  [{ id: 1, name: "Rafi" },{ id: 2, name: "Nila" },{ id: 3, name: "Sami" },];

// JavaScript-এ find() মেথডটির কাজ হলো অ্যারের উপাদানগুলোর মধ্য থেকে প্রথম যে উপাদানটি শর্ত পূরণ করবে, সেটিকে হুবহু বের করে আনা।

// আপনি শর্ত দিয়েছেন: singleUser.id === 2 (যে অবজেক্টের id এর মান 2)।

// find() মেথডটি প্রথম থেকে খোজা শুরু করে এবং id: 2 ওয়ালা অবজেক্টটি পেয়ে যায়: { id: 2, name: 'Nila' }।

// মজার বিষয় হলো: filter() মেথড একটি অ্যারে (Array) ফেরত দেয়, কিন্তু find() মেথড কোনো অ্যারে ফেরত দেয় না—এটি সরাসরি অরিজিনাল অবজেক্টটি (Object) বা মানটি ফেরত দেয়। তাই আউটপুট এসেছে { id: 2, name: 'Nila' }।

const users2 = [
  [1, "Rafi"],
  [2, "Nila"],
  [3, "Sami"],
];

const user2 = users2.find((singleUser2) => singleUser2[0] === 2);

console.log(user2); // [2, "Nila"]
console.log(users2); //  [[1, "Rafi"],[2, "Nila"],[3, "Sami"],];
