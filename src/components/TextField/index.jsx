import React, { Children, cloneElement, useRef } from "react";

import {
  MdExpandMore,
  MdVisibilityOff,
  MdVisibility,
  MdExpandLess,
} from "react-icons/md";
import "./styles.scss";

function TextField({
  label,
  placeholder = "",
  value,
  onChange,
  name,
  type = "text",
  error,
  children,
}) {
  const [inputType, setInputType] = React.useState("text");
  const [expend, setExpend] = React.useState(false);
  const arrayChildren = Children.toArray(children);
  const inputEl = useRef();

  React.useEffect(() => {
    setInputType(type);
  }, [type]);

  const onChangeType = (t) => {
    const previousValue = inputEl.current.value;
    inputEl.current.value = t;
    setExpend(false);
    const tracker = inputEl.current._valueTracker;

    if (tracker) {
      tracker.setValue(previousValue);
    }

    inputEl.current.dispatchEvent(new Event("change", { bubbles: true }));
  };

  return (
    <div className="form__group">
      <input
        type={inputType}
        id={name}
        name={name}
        className="form__field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ borderColor: error && "#F53C3C" }}
        disabled={type === "select" ? true : false}
        ref={inputEl}
      />
      <label
        htmlFor={name}
        className="form__label"
        style={{ color: error && "#F53C3C" }}
      >
        {label}
      </label>
      {type === "password" && (
        <div className="endAdornment">
          {inputType === "text" ? (
            <MdVisibility onClick={() => setInputType("password")} />
          ) : (
            <MdVisibilityOff onClick={() => setInputType("text")} />
          )}
        </div>
      )}
      {type === "select" && (
        <>
          <div
            className="dropdown-content"
            style={{ display: expend ? "block" : "none" }}
          >
            {Children.map(arrayChildren, (child, index) => {
              return (
                child.props.value &&
                cloneElement(child, {
                  key: index,
                  selected: value === child.props.value ? true : false,
                  click: () => {
                    onChangeType(child.props.value);
                  },
                })
              );
            })}
          </div>
          <div className="endAdornment">
            {expend ? (
              <MdExpandLess
                style={{ fontSize: "1.5rem" }}
                onClick={() => setExpend(false)}
              />
            ) : (
              <MdExpandMore
                style={{ fontSize: "1.5rem" }}
                onClick={() => setExpend(true)}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export const Menu = ({ value, selected, children, click, key }) => {
  return (
    <div
      key={key}
      className={value === selected ? "menu-active" : "menu"}
      onClick={click}
    >
      {children}
    </div>
  );
};
export default TextField;
