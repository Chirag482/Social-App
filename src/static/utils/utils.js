export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedValued = encodeURIComponent(params[property]);

    formBody.push(encodedKey + "=" + encodedValued);
  }
  return formBody.join("&");
}

export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem("token");
}
