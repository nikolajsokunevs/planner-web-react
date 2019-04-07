import React, { Component } from "react";

const InputFormComponent = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="username">{props.label}</label>
      <input type={props.type} className={props.className} name={props.name} placeholder={props.placeholder} onChange={(e)=>{props.onChange(e)}}></input>
      <div className="invalid-feedback">{props.errorMessage}</div>
    </div>
  );
};

export default InputFormComponent;
