// কখনো কখনো বর্তমান render-এর পাশাপাশি আগের render-এর value-ও জানতে চাইতে পারো। useRef দিয়ে সেটি রাখা যায়।

import { useEffect, useRef, useState } from "react";

export default function NameTracker() {
  const [name, setName] = useState("");
  const previousName = useRef("");

  useEffect(() => {
    // Effect আগের ref-এ নতুন name value সংরক্ষণ করে।
    previousName.current = name;
    return () => {};
  }, [name]);
  //   name পরিবর্তিত হলে effect চলে।

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      {/* Input-এর value name state-এ থাকে। */}
      <p>Current:{name}</p>
      <p>Previous:{previousName.current}</p>
      {/* পরবর্তী render-এ previousName.current সর্বশেষ effect-এ সংরক্ষিত value দেখাতে পারে। */}
    </>
  );
}
