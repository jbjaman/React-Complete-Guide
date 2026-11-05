// আরেকটি পদ্ধতি: একটি object-এ সব form state
// যখন অনেক field থাকবে, তখন একটি object ব্যবহার করা সুবিধাজনক হতে পারে।

import { useState } from "react";

function RegForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target; // Destructuring: Input-এর name এবং value property বের করে নেওয়া হচ্ছে।

    setForm((previousForm) => ({
      ...previousForm, // এখানে ...previousForm না দিলে অন্য field-গুলো হারিয়ে যেতে পারে। আর state object-কে সরাসরি mutate না করে নতুন object তৈরি করা হচ্ছে।
      [name]: value,
      //   আগের object-এর সব property কপি করা হচ্ছে, তারপর পরিবর্তিত field-এর value update করা হচ্ছে।
    }));
    // Spread operator
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="name" //name attribute: এটি জানায় কোন field পরিবর্তিত হয়েছে।
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name!"
        />
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email!"
        />
      </form>
      <p>Student Name: {form.name}</p>
      <p>Student Email: {form.email}</p>
    </div>
  );
}

export default RegForm;
