import React, { useState } from "react";
import PropTypes from "prop-types";

import { addUser } from "../util/api";

function AddUser(props) {
  const { updateUserList } = props;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    console.log("submitted!");
    addUser(username, email).then(res => {
      updateUserList();
      setUsername("");
      setEmail("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <input
          name="username"
          className="input is-large"
          type="text"
          placeholder="Enter a username"
          value={username}
          onChange={event => setUsername(event.target.value)}
          required
        />
      </div>
      <div className="field">
        <input
          name="email"
          className="input is-large"
          type="email"
          placeholder="Entre an email address"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />
      </div>
      <input
        type="submit"
        className="button is-primary is-large is-fullwidth"
        value="Submit"
      />
    </form>
  );
}

export default AddUser;
