import {
  FETCH_USER_PROFILE,
  USER_PROFILE_FAIL,
  USER_PROFILE_SUCCESS,
} from "./actionTypes";
import { getAuthTokenFromLocalStorage } from "../static/utils/utils";

export function userProfileSuccess(user) {
  return {
    type: USER_PROFILE_SUCCESS,
    user,
  };
}
export function userProfileFail(error) {
  return {
    type: USER_PROFILE_FAIL,
    error,
  };
}
export function startUserProfileFetch() {
  return {
    type: FETCH_USER_PROFILE,
  };
}
export function fetchUserProfile(userId) {
  return (dispatch) => {
    dispatch(startUserProfileFetch());
    const URL = `http://codeial.codingninjas.com:8000/api/v2/users/${userId}`;
    fetch(URL, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(userProfileSuccess(data.data.user));
          return;
        }
        dispatch(userProfileFail(data.message));
      });
  };
}
