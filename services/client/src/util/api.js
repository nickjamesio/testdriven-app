import axios from "axios";

export function getUsers() {
  return axios
    .get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
    .then(res => {
      return res.data.data.users;
    })
    .catch(err => {
      console.log(err);
      throw err
    });
}

export function addUser(username, email) {
  const data = {
    username,
    email
  };

  return axios
    .post(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`, data)
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
}
