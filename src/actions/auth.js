import { LOGIN_START } from "./actionTypes";

import { getFormBody } from "../static/utils/utils";

export function startLoggin() {
  return {
    type: LOGIN_START,
  };
}

export function login(email, password) {
  return (dispatch) => {
    const url = "http://codeial.codingninjas.com:8000/api/v2/users/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-forms-urlencoded",
      },
      body: getFormBody({ email, password }),
    });
  };
}
