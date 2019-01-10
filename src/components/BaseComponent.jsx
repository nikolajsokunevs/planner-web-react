import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import CalendarComponent from "./CalendarComponent";

class BaseComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <CalendarComponent />
      </React.Fragment>
    );
  }
}

export default BaseComponent;
