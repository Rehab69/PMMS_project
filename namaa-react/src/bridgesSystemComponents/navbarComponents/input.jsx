//input: label , name , value , error //output: onChange

import React from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        value={props.value}
        className="form-control"
        type="text"
        onChange={props.onChange}
        // autoFocus
      />
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

export default Input;
