// 2. useEffect ::::::::::::::::::::::::::--->

// useEffect আসলে কী?

// সহজভাবে বললে, useEffect ব্যবহার করা হয় React component-কে বাইরের কোনো system-এর সঙ্গে synchronize করার জন্য। Component-এর বাইরে কোনো side effect পরিচালনার জন্য useEffect ব্যবহার হয়।

/**
 * যেমন:
 * - API থেকে data আনা।
 * - Timer চালু বা বন্ধ করা।
 * - Browser event listener যোগ করা বা সরানো।
 * - কোনো external subscription-এর সঙ্গে যুক্ত থাকা।
 *
 */

// প্রথমে syntax দেখি:

// import { useEffect } from "react";

// useEffect(() => {
//   ---> এখানে effect-এর কাজ হবে

//   return () => {
//     ----> প্রয়োজন হলে cleanup-এর কাজ হবে
//   };
// }, [dependencies]);

/**
 * এখানে তিনটি গুরুত্বপূর্ণ অংশ আছে:
 *
 * 1. Effect function: useEffect-এর ভেতরের function, যেখানে কাজটি করা হয়।
 * 2. Cleanup function: Effect-এর ভেতর থেকে return করা function; আগের effect-এর কাজ পরিষ্কার করতে ব্যবহার হয়। Cleanup সব effect-এ বাধ্যতামূলক নয়। Timer, listener বা subscription-এর মতো resource তৈরি করলে সাধারণত cleanup দরকার হয়।
 * 3. Dependency array: কোন reactive value পরিবর্তন হলে effect আবার চলবে! সেটি নির্ধারণ করে।
 *
 */

// ২. useEffect বোঝার আগে Render বুঝি

/**
 * ধরো, তোমার component-এ এই code আছে:
 * 
 * function Counter() {
  const [count, setCount] = useState(0);

  console.log("Render:", count);

  useEffect(() => {
    console.log("Effect:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
 * 
 * প্রথমবার component render হলে সাধারণত sequence হবে:
 * 
 * ১. Render : React component-এর code চালায়
 * 
 * ২. Commit : প্রয়োজনীয় UI পরিবর্তন প্রয়োগ হয়
 * 
 * ৩. Effect : Browser paint-এর পরে effect সাধারণত চালানো হয়
 * 
 * useEffect-এর কাজ component-এর render-এর অংশ নয়। এটি React-এর commit-এর পর effect চালানোর ব্যবস্থা। তবে বিশেষ কিছু পরিস্থিতিতে timing ভিন্ন হতে পারে; useEffect-কে সব অবস্থায় paint-এর ঠিক পরে চলবেই—এভাবে মনে রাখবে না।
 * 
 */

// ৩. Dependency Array — useEffect-এর সবচেয়ে গুরুত্বপূর্ণ বিষয়

// Case A: Dependency array একেবারেই না দিলে

/***
 * 
 * useEffect(() => {
  console.log("Effect ran");
});
 * 
 * এর মানে হলো: প্রতিটি commit-এর পর effect চালানোর জন্য schedule হবে। যদি render-এর পর commit না হয়, effect-ও সেই কারণে চলবে না।
 * 
 * এটি বিপজ্জনক হতে পারে যদি effect-এর ভেতরে এমন state update থাকে, যা আবার render ঘটায়।
 *
 */

// Case B: Empty dependency array []

/**
 * 
 * useEffect(() => {
  console.log("Effect ran");
}, []);
 * 
 * এর মানে: component-এর প্রথম mount-এর পর effect চালানো হবে। সাধারণত প্রতিটি update-এ আবার চালানো হবে না।
 * 
 * তবে মনে রাখবে, development-এ React Strict Mode effect-এর setup ও cleanup অতিরিক্ত একবার চালিয়ে পরীক্ষা করতে পারে। 
 * তাই []-কে “জীবনে ঠিক একবারই চলবে” বলে মুখস্থ করা ঠিক নয়।
 * 
 */

// Case C: Dependency array-তে [count]

/**
 * 
 * useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
 * 
 * এখানে effect চালানো হবে:
 * - প্রথম mount-এর পরে।
 * - পরবর্তী render-এ count-এর value আগের render থেকে পরিবর্তিত হলে।
 * 
 * গুরুত্বপূর্ণ নিয়ম: 
 * Effect-এর ভেতরে ব্যবহৃত props, state বা component-এর মধ্যে তৈরি reactive value-এর dependency সঠিকভাবে উল্লেখ করতে হবে। 
 * Dependency বাদ দিলে effect পুরোনো value ব্যবহার করতে পারে।
 * 
 */

// ৪. Cleanup Function — কেন দরকার?

// ধরো, component একটি timer চালু করল। কিন্তু component আর UI-তে নেই, তারপরও timer চলতে থাকল। এতে অপ্রয়োজনীয় কাজ হতে পারে। সমাধান: cleanup

// Cleanup কখন চলে?

/**
 * 
 * useEffect(() => {
  // নতুন effect-এর setup

  return () => {
    // আগের effect-এর cleanup
  };
}, [userId]);
 * 
 * 
 * যদি userId পরিবর্তিত হয়, React সাধারণত আগে আগের effect-এর cleanup চালায়, তারপর নতুন userId-এর জন্য effect চালায়। Component unmount হলেও cleanup চলে।
 * 
 */

// Cleanup-এর সাধারণ ব্যবহার:

/**
 * - clearInterval() দিয়ে timer বন্ধ করা।
 * - removeEventListener() দিয়ে event listener সরানো।
 * - Subscription unsubscribe করা।
 * - প্রয়োজন অনুযায়ী AbortController দিয়ে fetch cancel করা।
 *
 */

// ৫. API Fetch করা — বাস্তব উদাহরণ ----> ApiFetchUsinghooks.jsx file

// ৬. Infinite Loop — Interview-এ খুব সাধারণ প্রশ্ন

/**
 * function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return <p>{count}</p>;
}
 * 
 * কেন সমস্যা হচ্ছে?
 * 
 * 1. প্রথম render-এ count = 0।
 * 2. Effect চলে এবং setCount(1) call করে।
 * 3. State বদলানোর কারণে আবার render হয়।
 * 4. count বদলেছে বলে effect আবার চলে।
 * 5. আবার state update হয়—এভাবেই চলতে থাকে।
 * 
 * এটি infinite update loop তৈরি করতে পারে।
 * 
 */

/**
 * কীভাবে এড়াবে?
 * 
 * Effect-এর ভেতরে state update করার আগে নিজেকে প্রশ্ন করবে: এই state update কি effect-এর dependency পরিবর্তন করে আবার effect চালাবে? যদি করে, তাহলে effect আদৌ দরকার কি না দেখবে, এবং update-টি সঠিকভাবে সীমাবদ্ধ করবে।
 * 
 * যদি শুধু mount-এর পরে initial value বাড়ানো উদ্দেশ্য হয়, তবে [] ব্যবহার করা যায়:
 * 
 * useEffect(() => {
  setCount(c => c + 1);
}, []);
 * 
 * তবে এটিও কেবল তখনই সঠিক, যখন component mount-এর পরে একবার increment করাই আসল requirement। শুধু loop এড়াতে dependency মুছে ফেলা ঠিক সমাধান নয়।
 * 
 */

// ৭. Stale Closure — পুরোনো value আটকে যাওয়ার সমস্যা

/**
 * function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <p>Count: {count}</p>;
}
 * 
 * তুমি হয়তো আশা করছ, count হবে 1, 2, 3, 4...। কিন্তু এখানে count সাধারণত 1-এ আটকে যাবে।
 * 
 *
 * কেন?
 * - [ ] থাকার কারণে effect প্রথম render-এর পর চলে।
 * - সেই render-এ count ছিল 0।
 * - Interval callback সেই count = 0 value-টি closure-এর মাধ্যমে ধরে রাখে।
 * - তাই প্রতি সেকেন্ডে setCount(0 + 1) call হয়। এটাই stale closure-এর একটি classic উদাহরণ।
 *
 */

// সঠিক সমাধান: Functional State Update

/**
 * useEffect(() => {
  const id = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);

  return () => clearInterval(id);
}, []);
 * 
 * এখানে callback-কে পুরোনো count variable পড়তে হচ্ছে না। React আগের state-এর value prev হিসেবে দেয়, তাই count ক্রমাগত বাড়ে।
 * 
 */

// আরেকটি সমাধান হলো count-কে dependency হিসেবে যোগ করা; তবে তাতে count পরিবর্তিত হলেই interval cleanup করে আবার তৈরি হবে। এই নির্দিষ্ট counter-এর জন্য functional update সহজতর।

// ৮. কখন useEffect ব্যবহার না করাই ভালো?

/**
 * সব কাজের জন্য useEffect দরকার নেই।
 * 
 *ধরো, তুমি completed task-এর সংখ্যা দেখাতে চাও:
 * 
 * const completedCount = tasks.filter(
  task => task.completed
).length;
 * 
 * এটি সরাসরি render-এর সময় হিসাব করাই যথেষ্ট।

এভাবে না করাই ভালো:
 * 
 * 
 * const [completedCount, setCompletedCount] = useState(0);

useEffect(() => {
  setCompletedCount(
    tasks.filter(task => task.completed).length
  );
}, [tasks]);
 * 
 * কারণ completedCount হলো tasks থেকেই হিসাব করা যায় এমন value। আলাদা state এবং effect রাখলে অপ্রয়োজনীয় জটিলতা ও অতিরিক্ত render হতে পারে।
 * 
 */

// মনে রাখবে: useEffect মূলত external system-এর সঙ্গে synchronization-এর জন্য... সাধারণ JavaScript calculation করার জন্য নয়।
