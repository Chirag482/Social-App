import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
  CLEAR_AUTH_STATE,
  EDIT_USER_FAIL,
  EDIT_USER_SUCCESS,
} from "./actionTypes";

import {
  getFormBody,
  getAuthTokenFromLocalStorage,
} from "../static/utils/utils";

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
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem("token", data.data.token);
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
          localStorage.setItem("token", data.data.token);
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

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}
export function clearAuthStae() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}

export function editUserSuccess(user) {
  return {
    type: EDIT_USER_SUCCESS,
    user,
  };
}
export function editUserFail(error) {
  return {
    type: EDIT_USER_FAIL,
    error,
  };
}

export function editUser(name, password, confirmPassword, userId) {
  return (dispatch) => {
    const URL = "http://codeial.codingninjas.com:8000/api/v2/users/edit";
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: getFormBody({
        name,
        password,
        name,
        confirm_password: confirmPassword,
        id: userId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(editUserSuccess(data.data.user));
          if (data.data.token) {
            localStorage.setItem("token", data.data.token);
          }
          return;
        }
        dispatch(editUserFail(data.message));
      });
  };
}
