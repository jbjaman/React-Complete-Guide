/**
 * Question: Lifting State Up কী?
 *
 * Answer: সহজভাবে, একাধিক component-এর একই state প্রয়োজন হলে সেই state-কে তাদের সবচেয়ে কাছের common parent component-এ নিয়ে যাওয়াকে Lifting State Up বলে।
 * 
 * 
 * ধরো, দুটি counter component আছে। প্রত্যেকটির নিজস্ব state থাকলে একটি counter-এর button click করলে অন্যটির সংখ্যা পরিবর্তিত হবে না।
কিন্তু তুমি যদি চাও—দুটি component একই সংখ্যা দেখাবে—তাহলে তাদের state shared হতে হবে।
 *
 *
 */

import { useState } from "react";

function CounterA() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="p-3 border rounded-lg"
      >
        Counter A: {count}
      </button>
    </>
  );
}
function CounterB() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="p-3 border rounded-lg"
      >
        Counter B: {count}
      </button>
    </>
  );
}

export function LiftingStateUp() {
  return (
    <div>
      {/* এখানে দুটি component-এর count আলাদা state। CounterA-তে click করলে শুধু CounterA-এর count বাড়বে। */}
      <CounterA />
      <CounterB />
    </div>
  );
}
// Step 2: State parent-এ নিয়ে যাই

function Counter2A({ count, increaseCount }) {
  return <button onClick={increaseCount}>Updated Counter A : {count}</button>;
}
function Counter2B({ count, increaseCount }) {
  return <button onClick={increaseCount}>Updated Counter B : {count}</button>;
}

export function LiftingStateUp2() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>
        <Counter2A count={count} increaseCount={increaseCount} />
        <Counter2B count={count} increaseCount={increaseCount} />
      </div>
    </>
  );
}

// এখন দুই button-ই একই count দেখাবে। যেকোনো একটি click করলে shared state update হবে, এবং দুই child-ই নতুন value পাবে।

// যেকোনো child-এর button click → parent-এর function চলে → parent-এর state update → দুই child-এ নতুন props যায়।

/**
 * 
 * State: count = 0
Function: increaseCount
count prop + onIncrease callback
 * 
 * 
 * 
 * State রাখা হয়েছে LiftingStateUp2()-এ।
 * count child-দের কাছে prop হিসেবে যাচ্ছে।
 * increaseCount function-ও prop হিসেবে যাচ্ছে।
 * Child button click করলে callback function চালাচ্ছে; parent-এর state update হচ্ছে।
 * 
 * 
 * 
 * - Child component-গুলো shared state-এর মালিক নয়। তারা parent থেকে value পায় এবং callback-এর মাধ্যমে পরিবর্তনের অনুরোধ করে।
 * 
 * 
 * 
 */
