import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from "./actionTypes";

import { getFormBody } from "../static/utils/utils";

export function startLoggin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLoggin());
    const url = "http://codeial.codingninjas.com:8000/api/v2/users/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-forms-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          //dispatch an action to save user
          dispatch(loginSuccess(data.data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}
