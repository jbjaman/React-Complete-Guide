// 2. useRef ::::::::::::::::::::::::::--->

// সহজ ভাষায়, useRef এমন একটি Hook যা একটি mutable object দেয়। সেই object-এর .current property-তে value রাখা যায়।

// const myRef = useRef(initialValue);

// React-এ Mounting এবং Unmounting হলো কোনো কম্পোনেন্টের (Component) জীবনের দুটি প্রধান ধাপ বা Lifecycle stage। সহজ বাংলায় বললে:

// Mounting = স্ক্রিনে আসা / জন্ম নেওয়া।

// Unmounting = স্ক্রিন থেকে চলে যাওয়া / মুছে যাওয়া।

// useRef-এর সাধারণ ভুল
// Ref পরিবর্তন করে UI update হবে ভাবা..
// countRef.current += 1;
// এটি নিজে থেকে re-render ঘটায় না। UI update দরকার হলে state ব্যবহার করো।
// প্রতিটি render-এ নতুন ref তৈরি হবে ভাবা.....একই mounted component-এর render-গুলোর মধ্যে React একই ref object ধরে রাখে।
// Render-এর সময় ref পরিবর্তন করা
// সাধারণত render চলাকালে .current পরিবর্তন করবে না। এতে render-এর আচরণ অনির্ভরযোগ্য হতে পারে। Initialization-এর কিছু বিশেষ pattern ব্যতিক্রম, তবে beginner হিসেবে ref পরিবর্তন event handler বা effect-এর মতো উপযুক্ত জায়গায় রাখো।
// সব state-ই ref-এ রাখা... যে value UI-তে দেখাতে হবে এবং বদলালে UI আপডেট হওয়া দরকার, সেটি সাধারণত state-এ রাখবে।

/**
 *
 * প্রশ্ন: useRef ও useState-এর মধ্যে পার্থক্য কী?
 *
 * useState এমন data রাখে যা পরিবর্তিত হলে React-কে re-render করতে বলে। useRef একটি mutable object দেয়, যার .current property-তে value রাখা যায়। Ref পরিবর্তন করলে নিজে থেকে re-render হয় না। তাই DOM element access বা timer ID সংরক্ষণে useRef ব্যবহার করি, আর UI-তে প্রতিফলিত হওয়া data-এর জন্য useState ব্যবহার করি।
 *
 *
 *
 *
 */
