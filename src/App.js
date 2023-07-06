import React, { useState } from "react";

import UserInputs from "./Components/UserInputs/UserInputs";
import UserInputsList from "./Components/UserInputs/UserInputsList";

function App(props) {
  const [users, setUsers] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { userName: userName, userAge: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="App">
      <UserInputs onAddUser={addUserHandler} />
      <UserInputsList users={users} />
    </div>
  );
}

export default App;
