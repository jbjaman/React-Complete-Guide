// Prop Drilling কী?
// App-এ থাকা theme দরকার শুধু ThemeButton-এর। কিন্তু মাঝখানে Layout ও Sidebar-কেও props গ্রহণ করে পরের component-এ পাঠাতে হচ্ছে।
// এই সমস্যাকে বলা হয় Prop Drilling।

/**
 * function App() {
  const theme = "dark";

  return <Layout theme={theme} />;
}

function Layout({ theme }) {
  return <Sidebar theme={theme} />;
}

function Sidebar({ theme }) {
  return <ThemeButton theme={theme} />;
}

function ThemeButton({ theme }) {
  return <button className={theme}>Change theme</button>;
}
 * 
 * 
 * 
 * 
 *  
 * */

// এটি ভুল code নয়। ছোট application-এ props ব্যবহার করাই স্বাভাবিক। কিন্তু component-এর অনেক স্তর পেরিয়ে একই data পাঠাতে হলে code জটিল হতে পারে।
// সমাধান: যদি অনেক দূরের component-এর একই shared value দরকার হয়, তখন Context উপকারী হতে পারে।

// Context কী?

/**
 *Context হলো React-এর এমন একটি ব্যবস্থা, যার মাধ্যমে component hierarchy-র ভেতরে থাকা component-গুলো মাঝের প্রতিটি component-কে props পাঠাতে বাধ্য না হয়েও shared value পেতে পারে।
 *
 * Context ব্যবহারে সাধারণত তিনটি ধাপ থাকে:
1. Create Context: createContext() দিয়ে Context তৈরি করো।
2. Provide a Value: Provider-এর মাধ্যমে value সরবরাহ করো।
3. Read the Value: যে component-এর দরকার, সেখানে useContext() ব্যবহার করো।
 *
 */
// ধাপ ১: Context তৈরি করা
import { createContext } from "react";

const ThemeContext = createContext("light"); // এখানে ThemeContext একটি Context object।

// "light" হলো default value। উপযুক্ত Provider না থাকলে Context পড়ার সময় এই value পাওয়া যাবে। Provider যদি value={undefined} দেয়, তাহলে default value ব্যবহার হবে না; consumer undefined পাবে।

// ধাপ ২: Provider দিয়ে value সরবরাহ করা
<ThemeContext.Provider value="dark">
  <AppContent />
</ThemeContext.Provider>;
// এখন এই Provider-এর ভেতরে থাকা component-গুলো ThemeContext থেকে "dark" value পেতে পারে।

// ধাপ ৩: useContext() দিয়ে value পড়া
import { useContext } from "react";

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return <button className={theme}>Current: {theme}</button>;
}
// এখানে useContext(ThemeContext) নিকটতম matching Provider-এর value পড়ে। Provider না থাকলে Context-এর default value পাওয়া যায়।

// useContext অবশ্যই component বা custom Hook-এর top level-এ call করবে, if বা loop-এর মধ্যে নয়।

// Senior-level insight: Context ব্যবহার করলেই application স্বয়ংক্রিয়ভাবে দ্রুত বা ভালো হয় না। সাধারণ parent-child data flow-এর জন্য props অনেক সময় আরও পরিষ্কার। Context তখন ব্যবহার করো যখন একই value অনেক স্তরের component-এ দরকার, যেমন theme, locale বা authenticated user-এর তথ্য।

// Context ব্যবহারের সাধারণ ভুল:

// ভুল ১ — Provider ছাড়া default value ভুলে যাওয়া

const UserContext = createContext("Guest");

// Provider না থাকলে consumer "Guest" পাবে। কিন্তু Provider-এর value যদি undefined হয়, তাহলে "Guest" পাওয়া যাবে না।

// ভুল ২ — useContext-কে state মনে করা

const theme = useContext(ThemeContext);

// এটি Context-এর value পড়ে। Value update করার ব্যবস্থা আসে Provider-এর state বা অন্য value source থেকে—useContext নিজে setter দেয় না।

// ভুল ৩ — সব state Context-এ রাখা

// একটি input-এর value যদি শুধু একটি component-এর দরকার হয়, তাহলে সেটি local useState-এ রাখাই প্রায়ই সহজ। শুধু shared হওয়ার প্রয়োজন হলে Context বিবেচনা করবে।

// ভুল ৪ — Context-কে security boundary ভাবা

// Context data পাঠানোর ব্যবস্থা, access control বা authorization-এর বিকল্প নয়। Sensitive operation-এর permission server-এ যাচাই করতে হয়।

// Interview Practice
// প্রশ্ন: What is useContext, and why do we use it?
// useContext is a React Hook that lets a component read a value from the nearest matching Context Provider. It helps avoid prop drilling when multiple components need shared data, such as a theme or locale. When the provided value changes, components consuming that context can re-render.
// useContext দিয়ে component নিকটতম matching Provider থেকে value পড়ে। অনেক স্তর দিয়ে props পাঠানোর পরিবর্তে shared data পাওয়ার জন্য এটি ব্যবহার করা যায়।
