import React, { Component } from "react";

const InputFormComponent = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input type={props.type} className={props.className} name={props.name} placeholder={props.placeholder} onChange={(e)=>{props.onChange(e)}}></input>
    </div>
  );
};

export default InputFormComponent;
