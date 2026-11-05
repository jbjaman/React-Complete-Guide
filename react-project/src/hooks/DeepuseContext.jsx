// এবার শুধু "dark" value পড়ার বদলে এমন একটি theme বানাব, যা button click করলে Light ও Dark mode-এর মধ্যে পরিবর্তিত হবে।

// এই উদাহরণে Context-এর সঙ্গে useState ব্যবহার করছি। কারণ theme পরিবর্তন হলে UI-ও আপডেট হওয়া দরকার।

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

function ThemeButton() {
  const { theme, toogleTheme } = useContext(ThemeContext);
  // setTheme() state update schedule করে। নতুন Context value পাওয়ার কারণে Context ব্যবহারকারী component-গুলো re-render করতে পারে।
  return (
    <>
      <button onClick={toogleTheme}>
        Current theme: {theme} {"-> Switch Theme"}
      </button>
    </>
  );
}

function Content() {
  const { theme } = useContext(ThemeContext);
  //   তাদের App থেকে সরাসরি props নেওয়ার প্রয়োজন নেই। তারা useContext(ThemeContext) ব্যবহার করে shared value পাচ্ছে।

  const styles = {
    background: theme === "dark" ? "#222" : "#fff",
    color: theme === "dark" ? "#fff" : "#222",
    padding: "24px",
    borderRadius: "8px",
  };

  return (
    <div style={styles}>
      <h2>Hello, React!</h2>
      <p>এখানে Context থেকে theme পড়া হচ্ছে।</p>
      <ThemeButton />
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");
  //   useState("light") বর্তমান theme রাখে। toggleTheme() সেটিকে "light" থেকে "dark" অথবা উল্টো দিকে পরিবর্তন করে।

  function toogleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  const contextValue = { theme, toogleTheme };
  //   { theme, toggleTheme } object-টি Context-এর মাধ্যমে descendants-দের দেওয়া হচ্ছে।

  return (
    <ThemeContext.Provider value={contextValue}>
      <Content />
    </ThemeContext.Provider>
  );
}

// Context-এর value বদলালে কী হয়?
// theme যদি "light" থেকে "dark" হয়, তাহলে Context পড়ছে এমন component-গুলো নতুন value পাবে এবং re-render করতে পারে।

// এখানে দুটি বিষয় মনে রাখবে:
// - Context ব্যবহার করছে না এমন প্রতিটি component-কে আলাদাভাবে Context update-এর কারণে re-render করতেই হবে—এমন নয়।
// - Provider-এর value যদি প্রতিটি render-এ নতুন object হয়, তাহলে value reference পরিবর্তিত হওয়ার কারণে consumers অপ্রয়োজনীয় re-render করতে পারে।

// এখানে { theme, toggleTheme } প্রতিটি render-এ নতুন object তৈরি করতে পারে। বড় application-এ performance সমস্যা দেখা দিলে useMemo দিয়ে value memoize করা বিবেচনা করা যায়। তবে ছোট application-এ আগে সহজ code লেখো; পরিমাপ বা বাস্তব প্রয়োজন ছাড়া optimization যোগ করার দরকার নেই।
