// ধরো, একটি timer শুরু করতে হবে এবং পরে button চাপলে বন্ধ করতে হবে।

import { useEffect, useRef, useState } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  //   এখানে useEffect-এর cleanup component unmount হলে timer বন্ধ করে। running state UI-তে button enable/disable করার জন্য; timerRef timer ID রাখার জন্য। দুটি আলাদা উদ্দেশ্য।

  function startTimer() {
    if (timerRef.current !== null) {
      return;
    }

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    setRunning(true);
  }
  // এখানে timerRef.current-এ setInterval()-এর return করা timer ID রাখা হয়েছে।
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setRunning(false);
  }

  return (
    <>
      <p>Seconds: {seconds}</p>
      <button
        onClick={startTimer}
        disabled={running}
        className="p-3 border border-blue-600"
      >
        Start
      </button>
      <button
        onClick={stopTimer}
        disabled={!running}
        className="p-3 border border-blue-600"
      >
        Stop
      </button>
    </>
  );
}
