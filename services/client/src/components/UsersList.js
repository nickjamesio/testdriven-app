import React from "react";
import PropTypes from 'prop-types';

const UsersList = props => {
  return (
    <div>
      {props.users.map(user => {
        return (
          <h4 key={user.id} className="box title is-4">
            {user.username}
          </h4>
        );
      })}
    </div>
  );
};

UsersList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UsersList;
