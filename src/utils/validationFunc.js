export function isRequired(value) {
  return value != null && value.trim().length > 0;
}

export function isText(value) {
  return value ? /^[A-Za-z ]+$/.test(value) : true;
}

export function isValidEmail(value) {
  var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return value ? regex.test(value) : true;
}

export function validatePassword(value) {
  if (value === "") {
    return "This field is required";
  }

  //minimum password length validation
  if (value.length < 8) {
    return "This field has a minimum length of 8 characters.";
  }
  return null;
}
