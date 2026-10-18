// একই UI সবসময় দেখানোর পরিবর্তে condition অনুযায়ী আলাদা UI দেখানোকে Conditional Rendering বলে।
// JavaScript-এর if, ternary operator ? :, এবং && operator ব্যবহার করে React-এ conditional rendering করা যায়।

import ListArray from "./ListArray";
import ObjectList from "./ObjectList";
import ToDoList from "./ToDoList";

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome Back !</h2>;
  }

  // isLoggedIn হলো একটি boolean prop
  //   এর value true হলে প্রথম return চলে।
  //   false হলে দ্বিতীয় return চলে।
  //   একটি component-এর render করার মতো UI বেছে নিতে if/else বিশেষভাবে উপকারী, যখন logic একাধিক ধাপের হয়।

  return <h2>Please log in.</h2>;
}

function Greeting2({ isLoggedIn }) {
  return (
    <>
      {" "}
      <h2>{isLoggedIn ? "Welcome back 2!" : " Please log in 2."}</h2>{" "}
    </>
  );

  //   Ternary operator
  //   condition ? valueIfTrue : valueIfFalse
  //   এক লাইনের conditional UI-এর জন্য এটি খুব প্রচলিত।
}

function UserPanel({ isLoggedIn }) {
  // && operator
  return (
    <>
      <div className="border p-3 flex items-center gap-5 border-amber-300">
        <h2>My Account</h2>
        {isLoggedIn && (
          <button className="border-2 border-amber-800 p-3">Logout</button>
        )}
        {/* isLoggedIn সত্য হলে button দেখা যাবে। মিথ্যা হলে button-এর UI দেখানো হবে না। */}
      </div>
    </>
  );
}

function Message({ unreadCount }) {
  return (
    <>
      <div className="text-amber-50">
        {unreadCount && <p>Unread messages !</p>}
        {/* যদি unreadCount-এর value 0 হয়, তাহলে React 0-কেও UI-তে দেখাতে পারে। ফলে screen-এ অপ্রত্যাশিত 0 দেখা যেতে পারে। */}
      </div>
      <div className="text-amber-50">
        {unreadCount > 0 && <p>Unread messages for value !</p>}
        {/* নিরাপদ উপায় 
        - এখানে condition সরাসরি true বা false হবে।
        */}
      </div>
    </>
  );
}

function ConditionalRendering() {
  return (
    <>
      <div className="p-5 bg-black text-slate-100 text-xl border border-slate-500 m-2 rounded-md">
        <Greeting isLoggedIn={true} />
        <Greeting isLoggedIn={false} />
        <Greeting2 isLoggedIn={false} />
        <Greeting2 isLoggedIn={true} />
        <UserPanel isLoggedIn={true} />
        <UserPanel isLoggedIn={false} />
        <Message unreadCount={0} />
        <Message unreadCount={13} />
        <div>
          <h1>List Array :</h1>
          <ListArray />
        </div>
        <div>
          <h1>Object List: </h1>
          <ObjectList />
        </div>

        <div>
          <ToDoList />
        </div>
      </div>
    </>
  );
}

export default ConditionalRendering;
