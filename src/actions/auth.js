import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from "./actionTypes";

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

export function singUp(name, email, password, confirmPassword) {
  return (dispatch) => {
    dispatch(signUpStart());
    const url = "http://codeial.codingninjas.com:8000/api/v2/users/signup";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({
        email,
        password,
        name,
        confirm_password: confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          dispatch(signUpSuccess(data.data.user));
        }
      })
      .catch((err) => console.log(err));
  };
}
export function signUpStart() {
  return {
    type: SIGNUP_START,
  };
}
export function signUpSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}
export function signUpFailed(errorMessage) {
  return {
    type: SIGNUP_FAILED,
    error: errorMessage,
  };
}
