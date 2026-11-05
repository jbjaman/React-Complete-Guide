// function Student2({ name }) {
function Student2({ name, age }) {
  // এখানে { name } হলো JavaScript object destructuring। React-এর props একটি object; তাই তার name property সরাসরি নেওয়া যায়।
  // একাধিক prop-ও পাঠানো যায়
  return (
    <div>
      <h2>Student: {name}</h2>
      <h2>Student Age: {age}</h2>
    </div>
  );
}

export default Student2;
