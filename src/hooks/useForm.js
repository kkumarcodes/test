import { useState } from "react";

function useForm(initialState = {}, validations = [], onSubmit = () => {}) {
  // Add the 'onSubmit' argument
  const { isValid: initialIsValid, errors: initialErrors } = validate(
    validations,
    initialState
  );
  const [inputValues, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setValid] = useState(initialIsValid);
  const [touched, setTouched] = useState({});

  const changeHandler = (event) => {
    const newValues = {
      ...inputValues,
      [event.target.name]: event.target.value,
    };
    const { isValid, errors } = validate(validations, newValues);
    setValues(newValues);
    setValid(isValid);
    setErrors(errors);
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = () => {
    // event.preventDefault();
    onSubmit(inputValues);
  };

  function validate(validations, values) {
    const errors = validations
      .map((validation) => validation(values))
      .filter((validation) => typeof validation === "object");
    return {
      isValid: errors.length === 0,
      errors: errors.reduce((errors, error) => ({ ...errors, ...error }), {}),
    };
  }

  return {
    inputValues,
    changeHandler,
    isValid,
    errors,
    touched,
    submitHandler,
  };
}

export { useForm };
