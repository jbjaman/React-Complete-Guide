// 1. useState ::::::::::::::::::::::::::--->

// useState-এর syntax বুঝি

// const [state, setState] = useState(initialValue);

// এটি আসলে array destructuring। useState() একটি array-এর মতো জোড়া value দেয়—বর্তমান state এবং সেটি update করার function।

/**
 *
 * const [name, setName] = useState("Rahim");
 * const [age, setAge] = useState(20);
 * const [isLoggedIn, setIsLoggedIn] = useState(false);
 * const [tasks, setTasks] = useState([]);
 *
 * name-এর প্রাথমিক value "Rahim"
 * age-এর প্রাথমিক value 20
 * isLoggedIn-এর প্রাথমিক value false
 * tasks শুরুতে একটি empty array
 *
 */
// initialValue মূলত প্রথম render-এর জন্য ব্যবহৃত হয়। পরের render-এ state-এর বর্তমান value React সংরক্ষণ করে রাখে।

// Question : State update করলেই সঙ্গে সঙ্গে value বদলে যায় না কেন?

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount(count + 1);
//     console.log(count);
//   }

//   return (
//     <button onClick={increase}>
//       {count}
//     </button>
//   );
// }

// প্রথম click-এ console.log(count) সাধারণত 0 দেখাবে, যদিও আমরা setCount(1) call করেছি।

/**
 *
 * কেন?
 * 1. Click handler বর্তমান render-এর count value ব্যবহার করে।
 * 2. setCount(1) React-কে পরবর্তী render-এর জন্য state update করতে বলে।
 * 3. বর্তমান function-এর মধ্যে থাকা count variable-টি বদলে যায় না।
 * 4. পরবর্তী render-এ count হবে 1।
 * অর্থাৎ, state setter বর্তমান render-এর variable-কে সরাসরি পরিবর্তন করে না।
 *
 */

// Functional Update — কখন ব্যবহার করব?

/**
 * ধরো, বর্তমান count হলো 0।
 *
 * setCount(count + 1);
 * setCount(count + 1);
 * setCount(count + 1);
 *
 * তুমি হয়তো ভাবছ, count হবে 3। কিন্তু একই render-এর count value তিনটি call-এই 0 হলে React তিনবার 1-এর জন্য update request পাবে। ফল হবে 1, 3 নয়।
 *
 * সঠিক উপায়:
 *
 * setCount(prev => prev + 1);
 * setCount(prev => prev + 1);
 * setCount(prev => prev + 1);
 *
 * এবার React প্রতিটি updater function-কে আগের update-এর ফল দিয়ে হিসাব করতে পারে:
 *
 * প্রথম update: prev + 1 ------>  1
 * দ্বিতীয় update: prev + 1 ------> 2
 * তৃতীয় update: prev + 1 ------> 3
 *
 * মনে রাখবে: নতুন state যদি বর্তমান state-এর ওপর নির্ভর করে, তাহলে functional update প্রায়ই সবচেয়ে নিরাপদ ও পরিষ্কার পদ্ধতি।
 *
 */

// Object এবং Array state কীভাবে update করব?

/**
 * State-এর object বা array সরাসরি পরিবর্তন করবে না।
 *
 * ভুল:
 *
 * user.name = "Karim";
 * setUser(user);
 *
 * সঠিক:
 *
 * setUser(prev => ({
 * ...prev,
 * name: "Karim"
 * }));
 *
 * Array-এর ক্ষেত্রে:
 *
 * // নতুন item যোগ
 *
 * setTasks(prev => [...prev, newTask]);
 *
 * // একটি item মুছে ফেলা
 *
 * setTasks(prev => prev.filter(task => task.id !== id));
 *
 * // একটি item update করা
 *
 * setTasks(prev =>
 *  prev.map(task =>
 *   task.id === id ? { ...task, completed: !task.completed } : task));
 */

// useState-এর Rules of Hooks

/**
 * 1. Hooks সাধারণত Function Component বা Custom Hook-এর top level-এ call করবে।
 * 2. if, loop বা nested function-এর ভেতরে Hook call করবে না।
 *
 * কারণ React-কে প্রতিটি render-এ Hook-গুলোর call order একই রাখতে হয়।
 * Rules of Hooks অনুসরণ করলে React সঠিকভাবে state ও Hook-এর তথ্য মিলিয়ে রাখতে পারে।
 *
 */
