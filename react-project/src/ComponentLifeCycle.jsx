// 1. Component Lifecycle কী?
// একটি React component-এর জীবনচক্রকে সহজভাবে তিনটি ধাপে ভাগ করা যায়।
// 1. Mount : Component প্রথমবার UI-তে যুক্ত হয়।
// উদাহরণ: একটি product page প্রথমবার দেখানো হলো।
// 2. Update : State বা props পরিবর্তনের কারণে component আবার render হতে পারে।
// উদাহরণ: counter-এর সংখ্যা 0 থেকে 1 হলো।
// 3. Unmount : Component UI থেকে সরিয়ে দেওয়া হয়।
// উদাহরণ: modal বন্ধ করলে তার component আর render tree-তে থাকে না।

// প্রতিটি re-render মানেই নতুন করে mount হওয়া নয়। একই component-এর state পরিবর্তিত হলে সাধারণত সেটি update হয়, unmount হয়ে নতুন component তৈরি হয় না।

// 2. Render এবং Commit-এর মধ্যে পার্থক্য

// Render phase
// React component function চালিয়ে নির্ধারণ করে নতুন UI কেমন হওয়া উচিত।

function Counter() {
  const [count, setCount] = useState(0);

  return <h2>Count: {count}</h2>;
}

// count পরিবর্তিত হলে React আবার component function চালিয়ে নতুন UI-এর বর্ণনা তৈরি করে।

// Commit phase
// React নির্ধারিত পরিবর্তনগুলো প্রয়োজন অনুযায়ী DOM-এ প্রয়োগ করে। এরপর browser screen-এ নতুন UI আঁকতে পারে।

// দুটি বিষয় আলাদা করে মনে রাখবে:
// - Render মানেই DOM-এ পরিবর্তন ঘটেছে, এমন নয়। React render করেও সিদ্ধান্ত নিতে পারে যে কোনো DOM পরিবর্তন প্রয়োজন নেই।
// - Component function-কে render-এর সময় একাধিকবার চালানো হতে পারে। তাই render-এর মধ্যে সরাসরি API call, timer শুরু করা বা অন্য side effect চালানো উচিত নয়।
// এই শেষ বিষয়টিই আমাদের useEffect-এর কাছে নিয়ে আসে।

// 3. useEffect কী?

// useEffect হলো React Hook, যা component-এর UI render/commit হওয়ার সঙ্গে সম্পর্কিত side effect পরিচালনা করতে ব্যবহার করা হয়।

// Side effect বলতে এমন কাজ বোঝায় যা শুধু JSX হিসাব করে ফেরত দেওয়ার মধ্যে সীমাবদ্ধ নয়। যেমন:
// - API থেকে data আনা
// - setInterval দিয়ে timer চালানো
// - Browser event listener যোগ করা
// - বাইরের কোনো system-এর সঙ্গে synchronization করা

import { useEffect, useState } from "react";

function Welcome() {
  const [name, setName] = useState("Rahim");

  useEffect(() => {
    console.log("Welcome component effect ran");
  }, []);

  return (
    <div>
      <h2>Hello, {name}</h2>

      <button onClick={() => setName("Karim")}>Change Name</button>
    </div>
  );
}

export default Welcome;

// component প্রথমবার commit হওয়ার পর effect চালানোর জন্য নির্ধারিত হয়। Button click করে name পরিবর্তন করলে component আবার render হবে, কিন্তু dependency array খালি থাকায় effect-টি সাধারণ update-এর কারণে আবার চালানো হবে না। তবে development-এর StrictMode-এ effect অতিরিক্ত setup/cleanup cycle-এর মধ্য দিয়ে যেতে পারে

// 4. Dependency Array — কখন Effect চলবে?
// Pattern A: Dependency array নেই
useEffect(() => {
  console.log("Effect ran");
});
// প্রতিবার component render ও commit হওয়ার পর effect চালানোর জন্য নির্ধারিত হয়।

// সাধারণভাবে এটি state update ঘটানো effect-এর ক্ষেত্রে অসাবধানতাবশত বারবার চলতে পারে।

// Pattern B: খালি dependency array []

useEffect(() => {
  console.log("Effect ran");
}, []);

// Component mount হওয়ার পর effect চালানোর জন্য নির্ধারিত হয়; সাধারণ update-এ আবার চালানো হয় না। Development StrictMode-এ অতিরিক্ত effect cycle হতে পারে।

// Pattern C: নির্দিষ্ট dependency

useEffect(() => {
  console.log("Name changed:", name);
}, [name]);
// এখানে effect প্রথমবারের পর name পরিবর্তিত হলে আবার চালানো হবে।

// effect-এর ভেতরে ব্যবহৃত props, state এবং component-এর মধ্যে তৈরি অন্য reactive value-গুলোর ওপর নির্ভরশীল হলে সেগুলোও যথাযথভাবে dependency array-তে দিতে হয়।

// 5. Cleanup Function কী?

// ধরো, একটি component প্রতি এক সেকেন্ডে timer চালাচ্ছে। Component বন্ধ হয়ে গেলেও timer চলতে থাকলে অপ্রয়োজনীয় কাজ চলতে পারে।

// এ ধরনের resource পরিষ্কার করার জন্য useEffect থেকে একটি cleanup function return করা যায়।


function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds(previous => previous + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <h2>Seconds: {seconds}</h2>;
}

export default Timer;

// ধাপে ধাপে বোঝো
// 1. Component mount হয়।
// 2. Effect চালু হয়ে setInterval timer তৈরি করে।
// 3. প্রতি এক সেকেন্ডে setSeconds state update করে।
// 4. Component unmount হলে cleanup function চলে।
// 5. clearInterval(timerId) timer বন্ধ করে।
// Cleanup শুধু unmount-এর সময় নয়। Dependency পরিবর্তনের কারণে effect আবার চালানোর আগে React আগের effect-এর cleanup চালায়।

// Cleanup-এর সাধারণ pattern

useEffect(() => {
  // 1. Setup: কোনো resource চালু করা

  return () => {
    // 2. Cleanup: resource বন্ধ বা পরিষ্কার করা
  };
}, [dependency]);

// যেসব কাজ cleanup চাইতে পারে:
// - setInterval বা setTimeout বাতিল করা
// - Browser event listener সরানো
// - Subscription বন্ধ করা
// - প্রযোজ্য ক্ষেত্রে চলমান network request বাতিল করা

// Cleanup হলো effect-এর setup-এর বিপরীত কাজ। যেটি চালু করেছ, প্রয়োজন হলে সেটি পরিষ্কার করবে।


function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // useEffect(..., []) দিয়ে mount-এর পর data loading শুরু করা হয়েছে।
    let ignore = false;
// ignore variable কেন আছে?
// Component সরিয়ে ফেলার পরও request শেষ হতে পারে। Cleanup-এ ignore = true করা হলে সেই effect-এর পুরোনো request থেকে পাওয়া result state update করবে না।

// এটি একটি সহজ pattern; এটি network request নিজে বাতিল করে না। Request সত্যিই বাতিল করতে চাইলে AbortController ব্যবহার করা যায়।

    async function loadUsers() {
        // useEffect-এর callback-কে সরাসরি async করবে না। async function Promise return করে, অথচ effect callback-এর return value cleanup function অথবা undefined হওয়া উচিত। তাই effect-এর ভেতরে আলাদা async function তৈরি করে সেটিকে call করা হয়।
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
// fetch() request পাঠায়।
        if (!response.ok) {
          throw new Error("Failed to load users");
        }
// response.ok দিয়ে HTTP response সফল হয়েছে কি না পরীক্ষা করা হয়েছে।
        const data = await response.json();
// response.json() response body-কে JavaScript data-তে রূপান্তর করে।
        if (!ignore) {
          setUsers(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadUsers();

    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }
// loading দিয়ে loading message দেখানো হয়।
  if (error) {
    return <p>Error: {error}</p>;
  }
// error দিয়ে error message দেখানো হয়।
  return (
    <ul>
        {/* users.map() দিয়ে প্রতিটি user-এর UI তৈরি করা হয়। */}
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))} 
      {/* key={user.id} দিয়ে list item-এর পরিচয় দেওয়া হয়। */}
    </ul>
  );
}

export default Users;

// 7. React StrictMode কেন Effect অতিরিক্ত চালায়?
// React-এর development mode-এ StrictMode কিছু সম্ভাব্য সমস্যা খুঁজতে অতিরিক্ত checks চালায়। এর মধ্যে effect-এর setup এবং cleanup অতিরিক্ত একবার চালানোর একটি cycle থাকতে পারে।

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// মনে রাখবে:
// - এই অতিরিক্ত cycle development-এর StrictMode-এর আচরণ।
// - এটি production-এর স্বাভাবিক lifecycle-এর সমান নয়।
// - Cleanup সঠিক হলে effect-এর resource পরিচালনা আরও নির্ভরযোগ্য হয়।
// - Effect বারবার চালানো ঠেকাতে অপ্রয়োজনীয় ref বা flag দিয়ে সমস্যা ঢাকার বদলে effect-এর logic ও cleanup ঠিক করো।

// Senior-level rule: কোনো value যদি বর্তমান props বা state থেকে সরাসরি হিসাব করা যায়, তাহলে সাধারণত সেটিকে আলাদা state-এ রেখে Effect দিয়ে synchronize করার দরকার নেই। useEffect মূলত React-এর বাইরের system-এর সঙ্গে synchronize করার জন্য ব্যবহার করো।