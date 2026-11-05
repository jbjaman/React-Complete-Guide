import { useRef } from "react";

export default function Example() {
  const countRef = useRef(0);
  //   countRef হলো ref object।

  function increase() {
    // countRef.current হলো এর মধ্যে রাখা value।
    countRef.current = countRef.current + 1;
    // .current পরিবর্তন করলে React নিজে থেকে component re-render করে না।
    console.log(countRef.current);
  }

  return (
    <>
      <button
        type="button"
        onClick={increase}
        className="p-3 border border-blue-600"
      >
        Increase
      </button>
    </>
  );
}
// একটি বিষয় মনে রাখবে: একই mounted component-এর পরবর্তী render-গুলোতে ref object একই থাকে; তবে component unmount হলে সেই ref-এর lifetime শেষ হয়।
