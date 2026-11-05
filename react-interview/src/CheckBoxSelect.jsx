/**
 * Question : Checkbox এবং Select কীভাবে handle করবে?
 * Form-এ শুধু text input থাকে না। Checkbox এবং dropdown-ও থাকে।
 */

//  Checkbox:
// Checkbox-এর ক্ষেত্রে checked ব্যবহার করা হয়, কারণ এটি text value নয়—একটি boolean value নিয়ন্ত্রণ করে।

import { useState } from "react";

function CheckBoxSelect() {
  const [accepted, setAccepted] = useState(false);
  const [country, setCountry] = useState("Bangladesh");

  return (
    <div>
      <label htmlFor="" className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          // এখানে event.target.checked থেকে true অথবা false পাওয়া যায়।
        />
        I accept the terms
      </label>
      <p>{accepted ? "Accepted" : "Not Accepted"}</p>

      <div>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
        </select>
        <p>Selected : {country}</p>
        {/* Dropdown থেকে অন্য দেশ নির্বাচন করলে country state update হবে। */}
      </div>
    </div>
  );
}

export default CheckBoxSelect;
