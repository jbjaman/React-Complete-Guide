/**
 * Question: React Hooks কী?
 * Answer: Hooks হলো React-এর দেওয়া বিশেষ function, যেগুলোর সাহায্যে Function Component-এ state রাখা, side effect পরিচালনা করা এবং অন্যান্য React সুবিধা ব্যবহার করা যায়।
 *
 * React component সাধারণত দুই ধরনের হতে পারে:
 *
 * 1. Function Component: JavaScript function দিয়ে তৈরি UI component।
 * 2. Class Component: JavaScript class দিয়ে তৈরি পুরোনো ধাঁচের component।
 *
 */

// Rules of Hooks — দ্রুত রিভিশন

/**
 *
 * - Hook অবশ্যই Function Component বা Custom Hook-এর top level-এ call করবে।
 * - if, loop বা nested function-এর ভেতরে Hook call করবে না।
 * - Effect-এর dependency array-তে ব্যবহৃত reactive value-গুলো সঠিকভাবে উল্লেখ করবে।
 * - Effect-এর setup-এর সঙ্গে সম্পর্কিত resource থাকলে cleanup করবে।
 * - State update যদি আগের state-এর ওপর নির্ভর করে, functional update বিবেচনা করবে।
 *
 */

/**
 * সবচেয়ে গুরুত্বপূর্ণ Hooks ->
 * 
 * useState
Component-এর state manage করে।
 * 
 * useEffect
Side effects যেমন API call, subscription এবং timer manage করে।
 * 
 * 
 * useRef
Re-render ছাড়াই value ধরে রাখে এবং DOM element access করতে পারে।
 * 
 * 
 * useContext
Component tree-তে Context-এর মাধ্যমে data share করে।
 * 
 * 
 * useMemo
Expensive calculation-এর result memoize করে।
 *  
 * 
 * 
 * useCallback
Function reference memoize করে।
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
