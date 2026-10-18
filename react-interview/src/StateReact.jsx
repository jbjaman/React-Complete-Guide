import { useState } from "react";

const StateReact = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert("Button Clicked");
  }

  function greet(name) {
    alert(`Hello, ${name}`);
  }
  /**
   * 1. useState(0) : React-কে বলে state-এর প্রাথমিক value হবে 0
   * 2. count : বর্তমান state value। প্রথম render-এ এর value 0
   * 3. setCount : State update করার function। যেমন, setCount(5) দিলে পরবর্তী render-এ count হবে 5
   * এখানে JavaScript array destructuring ব্যবহার করা হয়েছে।
   * useState দুটি value-সহ একটি array দেয়: বর্তমান state এবং সেটি update করার function।
   *
   *
   */

  return (
    <div className="p-5 bg-black text-slate-100 text-xl border border-slate-500 m-2 rounded-md">
      <p>
        3. এবার State কী? <br />
        State-কে এভাবে মনে রাখতে পারো: <br />
        - Props: component বাইরে থেকে data পায়। <br />
        - State: component নিজের data পরিচালনা করে। <br />
        - State update করলে React component-কে আবার render করে, যাতে UI নতুন
        data অনুযায়ী দেখানো যায়। <br />
      </p>

      <p>Count: {count}</p>
      {/* 
      1. Event Handling: onClick কী?
      - Event হলো ব্যবহারকারীর কোনো কাজ বা browser-এর কোনো ঘটনা। 
      যেমন:
- button click করা
- input-এ লেখা
- form submit করা
- mouse দিয়ে কোনো element-এ যাওয়া
React-এ button click handle করতে onClick ব্যবহার করতে পারো।
      */}
      <button
        onClick={() => setCount(count + 1)}
        className="border-amber-300 border p-2 rounded-md"
      >
        {" "}
        Increase
      </button>
      {/* Button click করলে আসলে কী হয়?
      - React state update করে এবং component আবার render করে।
      এটাই React-এর মূল ধারণাগুলোর একটি: state পরিবর্তন → re-render → নতুন UI
      
      */}
      <button
        onClick={handleClick}
        className="border-amber-300 border p-2 ml-4 rounded-md"
      >
        Show Alert
      </button>
      {/* Button click করলে handleClick function চলবে। */}
      {/* সবচেয়ে গুরুত্বপূর্ণ ভুল: function call বনাম function reference
      - <button onClick={handleClick}>
  Click Me
</button>
      - এখানে function-টিকে React-এর কাছে দেওয়া হচ্ছে, যাতে click হলে সেটি চালানো যায়।
      */}
      {/* 
      - <button onClick={handleClick()}>
  Click Me
</button>
- এখানে handleClick() render হওয়ার সময়ই function-টিকে call করে ফেলে। সাধারণত তুমি চাও না যে click করার আগেই handler চলুক।
      */}
      {/* 
      - যদি কোনো argument পাঠাতে চাও:
      - 
      function greet(name) {
  alert(`Hello, ${name}`);
}

function App() {
  return (
    <button onClick={() => greet("Rahim")}>
      Greet
    </button>
  );
}
      */}
      <button
        onClick={() => greet("Jamal")}
        className="border-amber-300 border p-2 ml-4 rounded-md"
      >
        {/* এখানে arrow function click হওয়ার সময় greet("Rahim") চালায়। */}
        Greet
      </button>
    </div>
  );
};

export default StateReact;
