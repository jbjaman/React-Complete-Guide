// Controlled Input — সবচেয়ে গুরুত্বপূর্ণ ধারণা
// এবার useState ব্যবহার করি।

import { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState("");

  function handleChange(inputData) {
    setName(inputData.target.value); // State update হয়
  }

  return (
    <>
      <div>
        {/* User input-এ লেখে
Rahim */}
        {/* value={name} input-এর value-কে state-এর সঙ্গে যুক্ত করে। */}
        <input
          // সাধারণ controlled text input-এ value এবং onChange একসঙ্গে ব্যবহার করা হয়।
          type="text"
          value={name} // React re-render করে, নতুন value দেখা যায়
          onChange={handleChange}
          //   onChange={handleChange} user-এর পরিবর্তন state-এ পাঠায়।
          placeholder="Enter your name"
        />
        {/* - React নতুন state অনুযায়ী UI render করে। */}
        <p>Your Name : {name}</p>
      </div>
      {/* এই ধরনের input-কে Controlled Input বলে, কারণ React state তার value নিয়ন্ত্রণ করছে। */}
    </>
  );
}

export default ControlledInput;
