// ধরো, তুমি একটি API থেকে user-এর list আনবে এবং UI-তে দেখাবে।

import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  //   users: API থেকে পাওয়া data রাখে।
  const [loading, setLoading] = useState(true);
  //   loading: data আসার অপেক্ষায় আছে কি না বোঝায়।
  const [error, setError] = useState("");
  //   error: request ব্যর্থ হলে error message রাখে।

  useEffect(() => {
    let ignore = false;
    async function fetchUsers() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        // response.ok: HTTP status সফল কি না যাচাই করে। fetch() সাধারণত 404 বা 500 status-এর জন্য নিজে থেকে reject করে না, তাই এই পরীক্ষা জরুরি।

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        // response.json(): response body-কে JavaScript data-তে রূপান্তর করে।
        const data = await response.json();

        // ignore: component unmount বা effect cleanup হওয়ার পরে পুরোনো request-এর result দিয়ে state update এড়াতে সাহায্য করে।
        if (!ignore) {
          setUsers(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || "Something went Wrong");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }
    fetchUsers();
    return () => {
      ignore = true;
    };
  }, []);

  // এখানে ignore flag পুরোনো response-কে উপেক্ষা করে; এটি network request নিজে cancel করে না। বাস্তব project-এ প্রয়োজন হলে AbortController ব্যবহার করে request cancel করা যায়।

  if (loading) {
    return <p>Loading Users...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <p className="text-3xl text-center py-3">API FETCH</p>
      <ul className="p-8 border bg-slate-500 text-lg text-stone-50">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Users;
