import "./App.css";
import Profile from "./Profile";
import Student from "./Student";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <h1 className="text-center text-4xl">R E A C T</h1>
      <div className="p-5 bg-black text-slate-100 text-xl border border-slate-500 m-2 rounded-md">
        <p>
          1. React আসলে কী? <br />
          React হলো JavaScript-এর একটি library, যেটা দিয়ে interactive user
          interface (UI) তৈরি করা যায়।
          <br />
          কেন React ব্যবহার করা হয়? 1. Component-based architecture 2. Reusable
          UI components 3. Efficient UI updates 4. One-way data flow 5. Large
          application maintain করা সহজ
          <br />
          UI মানে user স্ক্রিনে যা দেখে এবং যার সঙ্গে interaction করে
          <br />
          2. React-এ সাধারণত UI-কে state বা props-এর ওপর নির্ভরশীল করে লেখা হয়।
          প্রয়োজনীয় state update করলে React পরবর্তী render-এর মাধ্যমে UI-কে সেই
          data-এর সঙ্গে মিলিয়ে নেয়। <br />
          UI = f(state, props) <br /> এটি একটি সহজ mental model: UI হলো state
          এবং props থেকে নির্ধারিত ফলাফল। এটি কোনো literal JavaScript syntax নয়।
          <br />
          3. Component কী? <br />
          Component হলো UI-এর একটি reusable অংশ। <br />
          একটি বড় UI-কে ছোট ছোট component-এ ভাগ করলে code বুঝতে, reuse করতে এবং
          maintain করতে সুবিধা হয়।
          <br />
          4. Parent ও child component <br /> একটি component অন্য component-কে
          ব্যবহার করতে পারে। তখন সাধারণত ব্যবহারকারী component-কে parent এবং
          ভিতরে ব্যবহৃত component-কে child বলা হয়। <br />
          5. Rendering কী? <br /> Rendering হলো React component চালিয়ে তার JSX
          description থেকে UI নির্ধারণ করার প্রক্রিয়া।
          {/* 
          function Greeting() {
  return <h1>Good morning!</h1>;
}
  এই component render হলে React নির্ধারণ করে UI-তে Good morning! heading থাকা উচিত।
          
          */}
          <br />
          তিনটি শব্দ আলাদা করে বুঝবে:
          <br />- Component: UI তৈরির reusable function বা অংশ।
          <br />- Render: Component চালিয়ে UI-এর বর্ণনা তৈরি করা।
          <br />- DOM update / commit: প্রয়োজন হলে browser-এর DOM-এ পরিবর্তন
          প্রয়োগ করা। প্রতিটি render মানেই পুরো webpage নতুন করে তৈরি হয় না।
          React প্রয়োজনীয় পরিবর্তনগুলো commit করে।
          <br />
          6. State হলো component-এর এমন data, যা সময়ের সঙ্গে পরিবর্তন হতে পারে।
          উদাহরণ: counter-এর সংখ্যা বা To-do list-এর items।
          <br /> 7. JSX-এর সঙ্গে প্রথম পরিচয় <br /> JSX দেখতে HTML-এর মতো হলেও
          এটি JavaScript code-এর মধ্যে UI লেখার syntax। React project-এ সাধারণত
          JSX ব্যবহার করা হয়।
        </p>
        <p>
          JSX-এর ৩টি গুরুত্বপূর্ণ নিয়ম: <br />
          নিয়ম ১: একটি parent element-এর মধ্যে return করো। দুটি sibling
          element-কে একসঙ্গে return করতে হলে wrapper ব্যবহার করো| অথবা React
          Fragment ব্যবহার করতে পারো|
          {/* <>...</> */}
          অতিরিক্ত DOM wrapper ছাড়াই একাধিক element group করতে সাহায্য করে।{" "}
          <br /> নিয়ম ২: JavaScript expression লিখতে
          {/* {} */} ব্যবহার করো। <br />
          নিয়ম ৩: HTML-এর কিছু attribute-এর নাম আলাদা। <br /> JSX-এ সাধারণত
          class-এর পরিবর্তে className ব্যবহার করা হয়। HTML-এর for attribute-এর
          JSX equivalent হলো htmlFor।
        </p>
      </div>

      <Welcome />
      <Welcome />
      <Profile />
      <Student />
      {/* এখানে App হলো parent, Welcome হলো child। Welcome দুবার ব্যবহার করা হয়েছে, তাই greeting-ও দুবার render হবে। এখানে <Welcome /> কোনো HTML tag নয়—এটি React component ব্যবহার করার syntax।*/}
    </>
  );
}

export default App;
