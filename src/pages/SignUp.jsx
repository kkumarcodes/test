import React from "react";
import { Link } from "react-router-dom";
import TextField, { Menu } from "../components/TextField";
import Steper from "../components/Steper";
import Button from "../components/Button";
import { useForm } from "../hooks/useForm";
import {
  isRequired,
  isValidEmail,
  validatePassword,
} from "../utils/validationFunc";
import "../styles/pages/login.scss";

export const SignUpPage = () => {
  const initValues = {
    name: "",
    email: "",
    password: "",
    type: "",
  };

  const validations = [
    ({ name }) =>
      isRequired(name) || {
        name: "This field is required",
      },
    ({ email }) =>
      isValidEmail(email) || {
        email: "Please enter a valid email address",
      },
    ({ password }) =>
      !validatePassword(password) || {
        password: validatePassword(password),
      },
  ];

  const onSubmit = (formValues) => {
    console.log(formValues, "===");
  };

  const { inputValues, changeHandler, errors, isValid, submitHandler } =
    useForm(initValues, validations, onSubmit);

  return (
    <div className="loginpage">
      <div className="steper__container">
        <Steper total={3} current={0} />
      </div>

      <div className="login">
        <h2>Let’s set up your account</h2>
        <div className="haveaccount__label">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
        <TextField
          label="Your name"
          name="name"
          value={inputValues.name}
          placeholder="Your name"
          onChange={changeHandler}
        />
        <TextField
          label="Email address"
          value={inputValues.email}
          name="email"
          type="email"
          placeholder="Email address"
          error={!!errors.email}
          onChange={changeHandler}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <TextField
          label="I would describe my user type as"
          name="type"
          type="select"
          value={inputValues.type}
          placeholder="I would describe my user type as"
          onChange={changeHandler}
        >
          <Menu value="Developer">Developer</Menu>
          <Menu value="Admin">Admin</Menu>
          <Menu value="Super Admin">Super Admin</Menu>
        </TextField>
        <TextField
          label="Password"
          name="password"
          type="password"
          value={inputValues.password}
          placeholder="Password"
          onChange={changeHandler}
        />
        <p className="password-warning">{"Minimum 8 characters"}</p>
        <Button
          disabled={!isValid}
          onClick={() => {
            submitHandler();
          }}
        >
          Next
        </Button>
        <div className="terms">
          By clicking the “Next” button, you agree to creating a free account,
          and to <Link to="/terms">Terms of Service</Link> and{" "}
          <Link to="/privacy">Privacy Policy</Link>.
        </div>
      </div>
    </div>
  );
};
