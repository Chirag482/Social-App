export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedValued = encodeURIComponent(params[property]);

    formBody(encodedKey + "=" + encodedValued);
  }
  return formBody.join("&");
}