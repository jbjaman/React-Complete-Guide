function ToDoList() {
  const tasks = [
    { id: 1, title: "Learn JavaScript", completed: true },
    { id: 2, title: "Learn React", completed: false },
    { id: 3, title: "Practice DSA", completed: false },
    { id: 4, title: "Practice TypeScript", completed: true },
  ];

  //   const tasks2 = [];

  return (
    <>
      <div>
        <h1>My Task</h1>
        {/* tasks.length === 0 ? ... : ... দিয়ে list খালি কি না পরীক্ষা করা হয়েছে। */}
        {tasks.length === 0 ? (
          <p>No Tasks Available !!</p>
        ) : (
          <div>
            {/* tasks.map(...) দিয়ে প্রতিটি task-এর UI তৈরি হয়েছে। */}
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between">
                {/* key={task.id} দিয়ে প্রতিটি task-কে stable identity দেওয়া হয়েছে। */}

                <p className="text-green-50">{task.title}</p>
                <p>
                  {/* task.completed && " — Completed" দিয়ে completed task-এর জন্য অতিরিক্ত text দেখানো হয়েছে। */}
                  {task.completed && (
                    <p className="text-green-400 bg-slate-700 px-3 py-1 rounded-2xl">
                      Completed
                    </p>
                  )}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ToDoList;
