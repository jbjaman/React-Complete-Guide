import { useState } from "react";
import ChildProp from "./ChildProp";
import ClassMate from "./ClassMate";
import Student2 from "./Student2";

const Props = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-5 bg-black text-slate-100 text-xl border border-slate-500 m-2 rounded-md">
      <p>
        1. Props কী? <br />
        আমরা একটি reusable component বানাব এবং তার মধ্যে নাম পাঠাব। এই data
        পাঠানোর ব্যবস্থাটিই হলো Props।
        <ClassMate name="Rahim" />
        <ClassMate name="Karim" />
        <ClassMate name="Jarif" />
        <br /> Parent component: Props.jsx
        {/* name="Rahim" prop হিসেবে পাঠানো হয় */}
        <br /> Child component: ClassMate.jsx
        <br /> UI-তে দেখা যায়: Student: Rahim <br />- props.name দিয়ে সেই value
        পড়া হচ্ছে।
      </p>
      <p>
        Props destructuring: <br /> props.name না লিখে সরাসরি name নেওয়া যায়
        <Student2 name={"Mahin"} age={25} />
        <br />
        JSX-এর {}-এর মধ্যে JavaScript expression লেখা যায়।
      </p>
      <p>
        2. Props-এর গুরুত্বপূর্ণ নিয়ম: এগুলো Read-only <br />
        Child component-এর ভেতর থেকে prop-কে সরাসরি পরিবর্তন করা উচিত নয়। <br />
        React-এর নিয়ম অনুযায়ী props-কে component-এর read-only input হিসেবে
        বিবেচনা করবে। নতুন data দরকার হলে parent থেকে নতুন prop পাঠাবে, অথবা
        প্রয়োজন অনুযায়ী component-এর নিজস্ব state ব্যবহার করবে। <br />
        Interview-এ মনে রাখবে: Props সাধারণত parent থেকে child-এ data পাঠায়;
        child props-কে সরাসরি mutate করে না।
      </p>

      <h2>Count : {count}</h2>
      <ChildProp onIncrease={() => setCount((prevCount) => prevCount + 1)} />
    </div>
  );
};

export default Props;
