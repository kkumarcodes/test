import React from "react";
import "./styles.scss";

function Button({ children, disabled, ...props }) {
  return (
    <button className="form__button" disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
