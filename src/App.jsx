import React, { useState } from "react";
import User from "./components/User";
import data from "./data";

function App() {
  const [users, setUsers] = useState(data);
  const newUser = users.map((user) => {
    return (
      <User
        key={user.id}
        userImage={user.image}
        userName={user.name}
        userAge={user.age}
      />
    );
  });
  return (
    <main>
      <section className="container">
        <h3>
          {users.length} birthday{users.length > 1 && "s"} today
        </h3>
        <section className="usersList">{newUser}</section>
        <button onClick={() => setUsers([])} className="btn">
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
