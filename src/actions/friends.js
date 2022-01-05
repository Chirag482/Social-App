import { FETCH_FRIENDS_SUCCESS } from "./actionTypes";
import { getAuthTokenFromLocalStorage } from "../static/utils/utils";
export function fetchFriendsSuccess(friends) {
  return {
    type: FETCH_FRIENDS_SUCCESS,
    friends,
  };
}
export function fetchFriends() {
  console.log("bvkdjbkjbsdkbvksdbksd");
  return (dispatch) => {
    const URL =
      "http:codeial.codingninjas.com:8000/api/v2/friendship/fetch_user_friends";

    fetch(URL, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(data.data.friends());
        }
      });
  };
}
