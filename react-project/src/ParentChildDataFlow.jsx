// Parent–Child Data Flow:

// এখানে ParentChildDataFlow হলো parent, আর StudentName ও StudentAge হলো child।

function StudentName({ name }) {
  return <h2>Name: {name}</h2>;
}
function StudentAge({ age }) {
  return <h2>Age: {age}</h2>;
}

const ParentChildDataFlow = () => {
  return (
    <div>
      <StudentName name="Rahim" />
      {/* StudentName:
name prop */}
      <StudentAge age={25} />
      {/* StudentAge:
age prop */}
    </div>
  );
};

export default ParentChildDataFlow;

// এটাই React-এর সাধারণ one-way data flow: parent থেকে child-এ props যায়।
