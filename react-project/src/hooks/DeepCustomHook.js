import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  //   useCounter() নিজের মধ্যে state রাখছে।

  function increment() {
    setCount((previous) => previous + 1);
  }
  //   increment() count বাড়াচ্ছে।
  function decrement() {
    setCount((previous) => previous - 1);
  }
  //   decrement() count কমাচ্ছে।

  return {
    count,
    increment,
    decrement,
  };
  //   return দিয়ে component-কে প্রয়োজনীয় value এবং function দেওয়া হচ্ছে।
}

export default useCounter;
