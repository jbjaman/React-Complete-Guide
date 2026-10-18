// React Fragments: অপ্রয়োজনীয় <div> এড়ানো
// React component সাধারণত একটি root element বা একটি Fragment return করে।

/**
 *   <>...</> হলো Fragment-এর সংক্ষিপ্ত syntax। এটি UI-তে আলাদা wrapper DOM element তৈরি করে না।
 *
 * */

export function Profile() {
  return (
    <>
      <h2>Rahim</h2>
      <p>Frontend Developer</p>
    </>
  );
}

// Fragment কখন কাজে লাগে?
// - একাধিক element return করতে হলে।
// - অতিরিক্ত div দিয়ে HTML structure জটিল করতে না চাইলে।
// - Table-এর মতো element-এর child structure ঠিক রাখতে হলে।

// list-এর মধ্যে Fragment-এর নিজস্ব key প্রয়োজন হলে shorthand <>...</> নয়, পূর্ণ syntax ব্যবহার করতে হয়:

import { Fragment } from "react";

export function StudentRows({ students }) {
  return students.map((student) => (
    <Fragment key={student.id}>
      <h3>{student.name}</h3>
      <p>{student.age}</p>
    </Fragment>
  ));
}
