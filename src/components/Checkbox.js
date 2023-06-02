import React from "react";

export default function Checkbox({ className, className2, text, ...rest }) {
  return (
    <label
      className={`${className ? className : ""} ${
        className2 ? className2 : ""
      }`}
    >
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
}
