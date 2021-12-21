import React, { Component } from "react";
import Child from "./child";

export default class Parent extends Component {
  constructor(props) {
    super();

    this.state = {
      backgroundColor: "aquamarine",
    };
  }

  handleClick() {
    if (this.state.backgroundColor === "aquamarine") {
      this.setState({
        backgroundColor: "lightcoral",
      });
    } else {
      this.setState({
        backgroundColor: "aquamarine",
      });
    }
    return this.state.backgroundColor;
  }

  render() {
    return (
      <div
        className="parent"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <h2 className="component-header">Parent</h2>
        <Child handleClick={this.handleClick} />
        <button onClick={this.handleClick.bind(this)}>Change Color</button>
      </div>
    );
  }
}
