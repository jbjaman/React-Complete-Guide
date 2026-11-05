import { useRef } from "react";

export default function SearchBox() {
  const inputRef = useRef(null);
  //   useRef(null) দিয়ে একটি ref তৈরি করা হয়েছে।
  function focusInput() {
    inputRef.current.focus();
    // React input element তৈরি করে commit করার পর inputRef.current সেই DOM element-কে নির্দেশ করে।
  }

  return (
    <>
      <input type="text" ref={inputRef} placeholder="Search......." />
      {/* <input ref={inputRef} /> লিখে ref-টি DOM input element-এর সঙ্গে যুক্ত করা হয়েছে। */}

      <button onClick={focusInput} className="p-3 border border-blue-600">
        Focus Input
      </button>
      {/* Button click হলে inputRef.current.focus() input-এ focus করে। */}
    </>
  );
}

// সতর্কতা: DOM element যুক্ত হওয়ার আগে inputRef.current null থাকতে পারে। তাই এমন code চালানোর সময় নিশ্চিত হতে হবে যে element ইতিমধ্যে mount হয়েছে। Event handler-এ click করার সময় সাধারণত সেটি প্রস্তুত থাকে।
