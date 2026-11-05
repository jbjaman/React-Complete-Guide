/**
 * Form Submit এবং preventDefault()
এখন user form পূরণ করে Register button চাপলে কী হবে?
React-এ form submit পরিচালনার জন্য onSubmit ব্যবহার করা যায়।
 * 
 */

import { useState } from "react";

function FormSubmit() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    /**
     * Question: event.preventDefault() কেন?
     *
     * Answer: সাধারণ HTML form submit করলে browser default action হিসেবে page reload করতে পারে। preventDefault() সেই default action বন্ধ করে, যাতে আমরা React-এ নিজের submit logic চালাতে পারি।
     *
     *
     *
     */
    alert(`Welcome, ${name}`);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-2 flex items-center justify-between"
      >
        <label htmlFor="username">Name</label>
        <input
          type="text"
          id="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          //   required হলো browser-এর built-in validation-এর একটি উদাহরণ। তবে বাস্তব application-এ শুধু frontend validation যথেষ্ট নয়; server-side validation-ও দরকার।
        />
        <button
          type="submit"
          className="border-2 border-purple-700 p-3 rounded-xl"
        >
          Register
        </button>
      </form>
    </>
  );
}

export default FormSubmit;
