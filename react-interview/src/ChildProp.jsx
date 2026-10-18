/** 7. Child থেকে Parent-এ data পরিবর্তনের অনুরোধ কীভাবে পাঠাবে?
 * React-এ child সাধারণত parent-এর state সরাসরি পরিবর্তন করে না। তবে parent একটি function prop হিসেবে child-কে দিতে পারে। Child সেই function call করে parent-কে জানাতে পারে যে কোনো action ঘটেছে।
 */

function ChildProp({ onIncrease }) {
  return (
    <>
      <button
        onClick={onIncrease}
        className="border-amber-300 border p-2 rounded-md"
      >
        Increase From Child
      </button>
      {/* মনে রাখবে: Data parent থেকে child-এ যায়; callback function child থেকে parent-এর state update করার অনুরোধ জানাতে সাহায্য করে। */}
    </>
  );
}

export default ChildProp;
