import React from "react";
export const Button = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      style={{ marginRight: props.marginRight }}
    >
      {props.children}
    </button>
  );
};
