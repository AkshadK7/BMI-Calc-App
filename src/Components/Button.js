import React from "react";

const Button = (props) => {
  return <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.onClick}>{props.label}</button>;
};

export default Button;
