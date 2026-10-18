function Welcome() {
  // function Welcome() — Welcome নামে function component।
  // return — component কী UI প্রকাশ করবে, তা return করে।
  return <h1>Hello, React</h1>; // <h1>Hello, React!</h1> — JSX syntax।
}

export default Welcome; // export default Welcome — অন্য module-এ component-টি import করার সুযোগ দেয়।

/**
 * Rules :
 *
 * Component-এর নাম সাধারণত Capital letter দিয়ে শুরু করতে হয়।
 * Welcome ঠিক; welcome component হিসেবে ব্যবহার করলে React সেটিকে
 * lowercase HTML tag হিসেবে ব্যাখ্যা করতে পারে।
 *
 */
