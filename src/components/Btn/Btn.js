import React from "react";
import "./Btn.css";

function Btn(props) {
  const { variant = "primary", children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Btn;
