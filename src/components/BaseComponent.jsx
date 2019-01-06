import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import CalendarComponent from "./CalendarComponent";

class BaseComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderComponent />
        <CalendarComponent />
      </div>
    );
  }
}

export default BaseComponent;
