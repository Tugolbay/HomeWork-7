import React from "react";
export const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        className={props.className}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
