// বাস্তব project-এ data প্রায়ই object আকারে আসে।

function ObjectList() {
  const students = [
    { id: 101, name: "Rahim", age: 20 },
    { id: 102, name: "Karim", age: 21 },
    { id: 103, name: "Sumaiya", age: 19 },
  ];

  return (
    <div className="p-5 bg-black text-slate-100 text-xl border border-slate-500 m-2 rounded-md">
      <h2>Student</h2>
      {/* এখানে student প্রতিবার একটি object নির্দেশ করছে। */}
      {students.map((student) => (
        <div
          key={student.id}
          className="p-5 bg-black text-slate-100 text-xl border border-slate-500 m-2 rounded-md"
        >
          {/* Interview rule: সম্ভব হলে data-র সঙ্গে থাকা stable, unique ID-কে key হিসেবে ব্যবহার করবে। key সাধারণত sibling list-এর মধ্যে unique হওয়া প্রয়োজন, পুরো application জুড়ে নয়। */}
          <h3>{student.name}</h3>
          <h3>{student.age}</h3>
        </div>
      ))}
    </div>
  );
}

export default ObjectList;

// key কেন প্রয়োজন?
// React-কে list-এর item-গুলো শনাক্ত করতে হয়, যাতে কোন item যোগ হয়েছে, বাদ গেছে বা পরিবর্তিত হয়েছে তা বুঝে UI সঠিকভাবে আপডেট করতে পারে। key সেই পরিচয় দিতে সাহায্য করে।
