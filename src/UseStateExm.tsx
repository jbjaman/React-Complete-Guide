import { useState } from "react";

const UseStateExm = () => {
  /* 

-> 1. state defined

- একটি অবজেক্টের মধ্যে পুরো ফর্মের ডেটা রাখা ভালো।

*/
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [step, setStep] = useState(1); // বর্তমান ধাপ ট্র্যাক করার জন্য

  /*

-> 2. Input handle করা (Dynamic Handler)

- ইন্ডাস্ট্রিতে প্রতিটা ইনপুটের জন্য আলাদা ফাংশন লেখে না। একটি ফাংশন দিয়েই সব ইনপুট হ্যান্ডেল করা হয়।

*/

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // ডাইনামিকলি কি (key) সেট করা
    }));
  };

  /*

-> 3. Conditionl Rendering

- step ভ্যালুর ওপর ভিত্তি করে আলাদা আলাদা ইনপুট ফিল্ড দেখান।

*/

  return <div></div>;
};

export default UseStateExm;
