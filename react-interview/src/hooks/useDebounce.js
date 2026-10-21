import { useEffect, useState } from "react";

function useDebounce(value, delay = 500) {
  const [debouncedValue, setdebouncedValue] = useState(value);
  // শুরুতে debounced value-কে input value-এর সমান রাখা হচ্ছে। এরপর নির্ধারিত সময় পেরোলে এটি আপডেট হবে।
  useEffect(() => {
    const timerId = setTimeout(() => {
      // নির্দিষ্ট delay সময় পরে setDebouncedValue(value) চালাবে।
      setdebouncedValue(value);
    }, delay);

    return () => {
      clearInterval(timerId);
      //   এটাই useEffect-এর cleanup function। নতুন input আসার ফলে effect আবার চলার আগে আগের timer বাতিল হবে। Component unmount হলেও cleanup হবে। ফলে আগের timer অপ্রয়োজনীয়ভাবে কাজ চালিয়ে যাবে না
    };
  }, [value, delay]);
  //   value বা delay বদলালে effect আবার চলবে। এখানে দুটোই effect-এর reactive dependency।

  return debouncedValue;
  //   Custom Hook-টি component-কে শুধু debounced value ফিরিয়ে দিচ্ছে।
}

export default useDebounce;
