/**
 * 
 * children Prop কী?
 * 
 * এবার ধরো, তুমি একটি reusable Card component তৈরি করবে। Card-এর ভেতরে কখনো title, কখনো image, কখনো button বা অন্য component থাকতে পারে।
প্রতিবার আলাদা Card component না বানিয়ে, Card-এর ভেতরে যা থাকবে তা children হিসেবে পাঠানো যায়।
 * 
 */

function Card({ children }) {
  return (
    <>
      <h1>Children Prop</h1>
      <div className="border p-4">{children}</div>
    </>
  );
}

export function ChildrenProp() {
  // এখানে Card-এর opening এবং closing tag-এর মাঝখানে থাকা JSX-ই children prop হিসেবে পাওয়া যায়।
  return (
    <>
      <Card>
        <h2>Welcome</h2>
        <p>Learning React</p>
        <button>Continue React</button>
      </Card>
      <Card>
        <h2>Welcome 2</h2>
        <p>Learning JavaScript</p>
        <button>Continue JS</button>
      </Card>
    </>
  );
}

// children কোনো বিশেষ function নয়। এটি props object-এর একটি প্রচলিত property, যেখানে parent-এর opening ও closing component tag-এর মাঝের content পাওয়া যায়।
