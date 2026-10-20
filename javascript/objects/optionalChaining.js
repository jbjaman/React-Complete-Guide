// Nested object-এ কোনো property না থাকলে সাধারণ dot notation দিয়ে access করার সময় error হতে পারে।

const user = {
  name: "Rafi",
};

console.log(user?.name); // Rafi
console.log(user.address.city); // TypeError
console.log(user?.address?.city); // Undefined

// ?. বলে: বাম পাশের value যদি null বা undefined হয়, তাহলে পরের property access না করে undefined ফেরত দাও।

// Interview trap: ?. সব ধরনের error বন্ধ করে না। এটি শুধু নির্দিষ্ট nullish access-কে নিরাপদ করে। Property থাকলেও তার value ভুল ধরনের হলে অন্য error হতে পারে।
