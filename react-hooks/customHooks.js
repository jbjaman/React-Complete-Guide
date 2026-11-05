// Custom Hook কী?

// Custom Hook হলো আমাদের নিজের তৈরি করা একটি JavaScript function, যার ভেতরে React Hooks ব্যবহার করে reusable stateful logic রাখা যায়।
function useCounter() {
  // এখানে React Hook ব্যবহার করা যাবে
}

// এখানে function-এর নাম useCounter। নামের শুরুতে use আছে—এটা গুরুত্বপূর্ণ।
// Custom Hook-এর ভেতরে আমরা useState, useEffect-এর মতো React Hooks ব্যবহার করতে পারি।

// Hook-এর code একই হলেও প্রতিটি component যখন Hook-টি call করে, তখন সে নিজের state পায়।

// মনে রাখবে:
// - Custom Hook logic reuse করে।
// - Custom Hook call করলেই component-গুলোর মধ্যে state share হয় না।
// - একাধিক component-এর একই shared state দরকার হলে lifting state up, Context, অথবা অন্য state-management পদ্ধতি বিবেচনা করতে হয়।

//  Debounce কী?

// Debounce হলো এমন একটি technique, যেখানে কোনো কাজ চালানোর আগে নির্দিষ্ট সময় অপেক্ষা করা হয়। ওই সময়ের মধ্যে আবার নতুন input এলে অপেক্ষার timer পুনরায় শুরু হয়।

// Custom Hook লেখার Rules

// 1. নাম use দিয়ে শুরু হবে। যেমন useCounter, useDebounce, useFetch।
// 2. Custom Hook-এর ভেতরে অন্য Hooks ব্যবহার করা যায়।
// 3. React Hooks-কে সাধারণত component বা Custom Hook-এর top level-এ call করতে হবে—if, loop বা nested function-এর ভেতরে নয়।
// 4. Custom Hook একটি component থেকে আরেকটিতে logic reuse করে; নিজে থেকে shared state তৈরি করে না।
// 5. Custom Hook থেকে value, object, array বা function—যেটা দরকার—return করা যায়।

// Custom Hook দিয়ে reusable logic তৈরি করা যায়।
// useCounter-এর মতো Hook stateful logic component থেকে আলাদা রাখতে সাহায্য করে।
// একই Hook ব্যবহার করলেই component-গুলোর state share হয় না।
// useDebounce timer ও cleanup ব্যবহার করে দ্রুত পরিবর্তিত input-এর সর্বশেষ value কিছুক্ষণ অপেক্ষা করে দেয়।

// প্রশ্ন: What is a Custom Hook in React?

// A Custom Hook is a reusable JavaScript function that allows us to extract and reuse stateful logic between React components. Its name starts with use, and it can call other React Hooks. Each invocation generally has its own state; sharing logic does not automatically mean sharing state.

// সম্ভাব্য follow-up প্রশ্ন:
// - কেন Custom Hook ব্যবহার করব?
// - Custom Hook এবং সাধারণ function-এর মধ্যে পার্থক্য কী?
// - দুটি component একই Custom Hook ব্যবহার করলে state কি একই হবে?
// - useDebounce-এ cleanup function কেন দরকার?
// - Custom Hook কি অন্য Custom Hook call করতে পারে?
