// Callback Props: Child থেকে Parent-কে জানানো
// React-এ data সাধারণত parent থেকে child-এ যায়। কিন্তু child-এ কোনো action ঘটলে parent-কে কীভাবে জানাব?
// উত্তর: parent একটি function তৈরি করে prop হিসেবে child-কে দেবে।

function Child({ shortMessage }) {
  return (
    <button
      onClick={() => shortMessage("Hello from Child")}
      className="p-3 border cursor-pointer"
    >
      {/* Child button click করলে shortMessage("Hello from Child!") চালায়। */}
      Send Message
    </button>
    // ফলে parent-এর handleMessage function message-টি পায়।
  );
}

// এটিকে callback prop বলা হয়।

export function CallBackProps() {
  function handleMessage(message) {
    alert(message);
  }
  return (
    <>
      <div>
        <Child shortMessage={handleMessage} />
        {/* shortMessage={handleMessage} দিয়ে function-টি child-এ পাঠানো হয়েছে। */}
      </div>
    </>
  );
}

/***
 * 
 * 
 * Interview-এ কীভাবে বলবে?
“React uses one-way data flow. A parent can pass data and callback functions to child components through props. The child can invoke a callback to notify the parent about an event, allowing the parent to update its state.”
এই উত্তরটি মনে রাখার চেষ্টা করো, কারণ এটি Parent–Child Data Flow সম্পর্কে একটি ভালো সংক্ষিপ্ত ব্যাখ্যা।
 * 
 * 
 */
