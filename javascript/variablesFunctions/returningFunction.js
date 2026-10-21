// JavaScript-এ ফাংশন হলো First-Class Citizen। এর মানে হলো, জাভাস্ক্রিপ্টে একটি ফাংশন অন্য যেকোনো সাধারণ ভ্যালুর মতোই (যেমন: String, Number বা Object-এর মতো)।
// তাই একটি ফাংশনের ভেতর থেকে অন্য আরেকটি ফাংশনকে return (আউটপুট/ফেরত) করা যায়। এই প্যাটার্ন বা ধারণাকেই বলা হয় "Returning Functions"।
// যে ফাংশন অন্য কোনো ফাংশনকে রিটার্ন করে, তাকে বলা হয় Higher-Order Function (HOF)

// মূল ফাংশন (Higher-Order Function)
function makeGreeting(greeting) {
  // একটি নতুন ফাংশন রিটার্ন (Return) করা হচ্ছে
  return function (name) {
    return greeting + ", " + name + "!";
  };
}

// ১. 'sayHello' নামের ভেতরে রিটার্ন হওয়া ফাংশনটি রাখা হলো
const sayHello = makeGreeting("Hello");

// ২. এখন 'sayHello' নিজেই একটি ফাংশন হয়ে গেছে
console.log(sayHello("Rafi")); // আউটপুট: Hello, Rafi!
console.log(sayHello("Selopia")); // আউটপুট: Hello, Selopia!

// 'sayGoodbye' দিয়ে নতুন আরেকটি ভ্যারিয়েন্ট বানানো হলো
const sayGoodbye = makeGreeting("Goodbye");
console.log(sayGoodbye("Rafi")); // আউটপুট: Goodbye, Rafi!

// ৩. ইন্টারভিউতে এই টপিক থেকে মূলত কী কী কনসেপ্ট জানতে চায়?
// ইন্টারভিউয়ার যদি পিডিএফ-এর এই টপিক থেকে প্রশ্ন করে, তবে তারা মূলত ৩টি জিনিস চেক করতে চায়:

// ক) ক্লোজার (Closure)একটি ফাংশন যখন রিটার্ন হয়ে বাইরে চলে আসে, তখনো সে তার প্যারেন্ট ফাংশনের ভ্যারিয়েন্ট বা ডাটাগুলোকে মেমরিতে মনে রাখতে পারে। উপরের উদাহরণে sayHello("Rafi") কল করার সময়ও সে মূল ফাংশনের "Hello" স্ট্রিংটি মনে রেখেছে। এটিই হলো Closure

// খ) কারিং (Function Currying)
// একটি ফাংশনকে একাধিক আর্গুমেন্ট না দিয়ে ধাপে ধাপে ভেঙে ফাংশন রিটার্ন করার মাধ্যমে কল করার প্রক্রিয়া:

// // Arrow function দিয়ে Returning Function
const multiply = (a) => (b) => a * b;

console.log(multiply(5)(10)); // আউটপুট: 50

// গ) রিঅ্যাক্টে এর ব্যবহার (React Event Handlers)
// রিঅ্যাক্টে বাটনের onClick-এ আর্গুমেন্টসহ কোনো ফাংশন পাঠাতে গেলে সরাসরি কল না করে Returning Function ব্যবহার করা হয়:

const handleDelete = (id) => {
  return () => {
    console.log("Deleting item ID:", id);
  };
};

// JSX-এ রিটার্ন হওয়া ফাংশনটি পাস করা হচ্ছে
<button onClick={handleDelete(user.id)}>Delete</button>;

// ৪. ইন্টারভিউতে কীভাবে উত্তর দেবে? (Sample Answer)
// প্রশ্ন: JavaScript-এ "returning functions" দিয়ে কী বোঝায়?উত্তর: JavaScript-এ ফাংশন হলো First-Class Citizen, তাই একটি ফাংশনের ভেতর থেকে অন্য ফাংশন রিটার্ন করা যায়। যে ফাংশন অন্য ফাংশন রিটার্ন করে তাকে Higher-Order Function বলে। এর মাধ্যমে ক্লোজার (Closure), ফাংশন কারিং (Currying) এবং রিঅ্যাক্টের ইভেন্ট হ্যান্ডলিংয়ের মতো গুরুত্বপূর্ণ কাজগুলো সম্পন্ন হয়।
