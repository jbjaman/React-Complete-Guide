import { useEffect, useState } from "react";

// Component mount হলে timer চালু হয়।

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000); // প্রতি এক সেকেন্ডে setSeconds state বাড়ায়।
    return () => {
      clearInterval(timerId); // Component unmount হলে cleanup চলে এবং timer বন্ধ হয়।
    };
  }, []);

  // Strict Mode development-এ setup → cleanup → setup হতে পারে; cleanup ঠিকমতো লেখা থাকলে এটি নিরাপদে কাজ করবে।

  return (
    <>
      <p>Seconds: {seconds}</p>
    </>
  );
}

export default Timer;
