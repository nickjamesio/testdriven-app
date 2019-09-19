import React, { useState, useEffect } from "react";

import { getUsers } from "./util/api";
import UserList from "./components/UsersList";
import AddUser from "./components/AddUser"

function App() {
  const [users, setUsers] = useState([]);
  async function updateUserList() {
    const allUsers = await getUsers();
    setUsers(allUsers);
  }

  useEffect(() => {
    updateUserList();
  }, [setUsers]);

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <br />
            <h1 className="title is-1">All Users</h1>
            <hr />
            <br />
            <AddUser updateUserList={updateUserList}/>
            <br/><br/>
            <UserList users={users}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
