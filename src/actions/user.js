import axios from "axios";
export const USER_CREATED = "USER_CREATED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const databaseUrl = "http://localhost:4000";

function signUpSuccess() {
  return { type: USER_CREATED };
}

//create user
export function signUp(username, email, password) {
  return async function(dispatch, getState) {
    const response = await axios.post(`${databaseUrl}/user`, {
      username: username,
      email: email,
      password: password
    });

    if (response.status === 201) {
      dispatch(signUpSuccess());
    }
  };
}

function loginSuccess(token) {
  // console.log("is this an id? 2", userId);
  return {
    type: LOGIN_SUCCESS,
    payload: { token: token }
  };
}

export function login(email, password) {
  return async function(dispatch, getState) {
    // console.log(email, password);
    const response = await axios.post(`${databaseUrl}/login`, {
      email,
      password
    });
    // console.log("this should contain an id", response);
    dispatch(loginSuccess(response.data.jwt, response.data.userId));
  };
}

// function updateUserSuccessful(object) {
//   return {
//     type: "UPDATE_USER",
//     payload: object
//   };
// }
// export function updateUser(object) {
//   return async function(dispatch, getState) {
//     dispatch(updateUserSuccessful(object));
//   };
// }
