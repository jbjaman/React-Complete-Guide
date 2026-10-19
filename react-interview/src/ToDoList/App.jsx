import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Practice useState", completed: true },
  ]);
  // useState — task-এর data রাখা
  //   setTasks দিয়ে সেই state update করি।
  //   useState([...]) দিয়ে প্রাথমিক data সেট করেছি।

  const [newTitle, setNewTitle] = useState("");

  function handleAddTask(event) {
    event.preventDefault();
    // event.preventDefault() form submit-এর ফলে browser-এর স্বাভাবিক page reload আটকায়।

    const title = newTitle.trim();

    if (title === "") {
      return;
    }
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTasks((previousTasks) => [...previousTasks, newTask]);
    // এটি আগের array-এর সব task রেখে শেষে নতুন task যোগ করে।
    // আমরা previousTasks.push(newTask) করছি না, কারণ সেটি আগের array-কে সরাসরি mutate করে। React state-এর ক্ষেত্রে নতুন array তৈরি করাই সঠিক পদ্ধতি।

    setNewTitle("");
  }

  return (
    <>
      <h1>MY TODO APP</h1>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
          placeholder="What do you need to do?"
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {/* map() — প্রতিটি task-এর জন্য UI তৈরি করা */}
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
          //   key={task.id} — প্রতিটি item চেনানো
        ))}
      </ul>
    </>
  );
}

export default App;
