import { useRef, useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  return (
    <>
      <p>State Count: {count}</p>
      <p>Ref Count: {countRef.current}</p>
      <button
        onClick={() => {
          setCount((pre) => pre + 1);
        }}
        className="p-3 border border-blue-600"
      >
        Increase State
      </button>
      {/* Increase state চাপলে React re-render করে; তাই state-এর নতুন value UI-তে দেখা যায়। */}
      <button
        onClick={() => {
          countRef.current += 1;

          console.log(countRef.current);
        }}
        className="p-3 border border-blue-600"
      >
        Increase Ref
      </button>
      {/* Increase ref চাপলে ref-এর value বদলায় এবং console-এ দেখা যায়, কিন্তু সেই click-এর কারণে UI re-render হয় না। */}
    </>
  );
}

// পরে অন্য কোনো কারণে component re-render হলে UI-তে সর্বশেষ ref value দেখা যেতে পারে। তবে render-এর সময় .current পড়ে UI তৈরি করার ওপর নির্ভর করা সাধারণত উচিত নয়।

// Senior-level rule: UI-তে কোনো value পরিবর্তনের সঙ্গে সঙ্গে প্রতিফলিত হওয়া দরকার হলে সাধারণত useState ব্যবহার করবে। শুধু value সংরক্ষণ করতে হলে এবং পরিবর্তনে re-render দরকার না হলে useRef উপযুক্ত হতে পারে।
