// State কেন দরকার?
// ধরো, একটি button-এ click করলে সংখ্যা বাড়বে। সাধারণ JavaScript variable দিয়ে লিখলে:

// function Counter() {
//   let count = 0;

//   function increase() {
//     count = count + 1;
//     console.log(count);
//   }

//   return (
//     <button onClick={increase}>
//       Count: {count}
//     </button>
//   );
// }

// এখানে increase() চললে variable-এর value বদলায়, কিন্তু React-কে বলা হয় না যে UI আপডেট করা দরকার। তাই button-এর text প্রত্যাশামতো বদলাবে না।

import { useState } from "react";

function DeepuseState() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  //   এখন setCount() call করলে React নতুন state অনুযায়ী UI render করতে পারে।

  return (
    <>
      <button onClick={increase}>Count: {count}</button>
    </>
  );
}

export default DeepuseState;
