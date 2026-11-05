/**
 * একটি input থেকে একাধিক input-এ যাই
বাস্তব form-এ সাধারণত একাধিক field থাকে। যেমন name, email এবং password।
প্রতিটি field-এর জন্য আলাদা state রাখা যায়:
 */

import { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form>
        {/* প্রতিটি field-এর নিজস্ব state আছে। তাই name পরিবর্তন করলে email-এর state পরিবর্তিত হয় না। */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <p>User Name: {name}</p>
        <p>User Email: {email}</p>
      </form>
    </>
  );
}

export default RegistrationForm;
