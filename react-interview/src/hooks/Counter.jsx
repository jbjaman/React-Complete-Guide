import { useState } from "react";
// এখানে useState হলো একটি Hook
function Counter() {
  const [count, setCount] = useState(0);
  //   count হলো বর্তমান state value।
  // setCount হলো state update করার function।
  //   useState(0) বলে initial state হবে
  //   setCount দিয়ে state update করলে React প্রয়োজন অনুযায়ী component আবার render করে, ফলে নতুন value UI-তে দেখা যায়।

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
