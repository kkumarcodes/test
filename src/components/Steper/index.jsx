import React from "react";
import "./styles.scss";

function Steper({ total, current = 0 }) {
  return (
    <div className="form__steper">
      Step {current + 1} of {total}
      {[...Array(total).keys()].map((el) => {
        return <div className={el === current ? "oval--active" : "oval"} />;
      })}
    </div>
  );
}

export default Steper;
