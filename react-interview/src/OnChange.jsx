// onChange হলো একটি React event handler, যা input-এর value পরিবর্তিত হলে চালানো হয়।

function OnChange() {
  // handleChange-এর parameter হিসেবে আমরা event নাম দিয়েছি। নামটি বাধ্যতামূলক নয়; e বা অন্য নামও হতে পারে।
  function handleChange(event) {
    // event: input change-এর event object।
    // event.target: যে element-এ event ঘটেছে, এখানে input।
    console.log(event.target.value);
    // event.target.value: input-এর বর্তমান value।
  }
  return (
    <>
      <div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter Your Name"
        />
      </div>
    </>
  );
}

export default OnChange;

// তুমি যদি input-এ Rahim লেখো, তাহলে typing-এর সময় console-এ নতুন value দেখা যাবে।
