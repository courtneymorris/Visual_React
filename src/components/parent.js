import React, { Component } from "react";
import Child from "./child";

export default class Parent extends Component {
  constructor(props) {
    super();

    this.state = {
      backgroundColor: "aquamarine",
      childBackgroundColor: "lightcoral",
    };
  }

  handleClick() {
    if (this.state.backgroundColor === "aquamarine") {
      this.setState({
        backgroundColor: "lightcoral",
        childBackgroundColor: "aquamarine",
      });
    } else {
      this.setState({
        backgroundColor: "aquamarine",
        childBackgroundColor: "lightcoral",
      });
    }
  }

  render() {
    return (
      <div
        className="parent"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <h2 className="component-header">Parent</h2>
        <Child backgroundColor={this.state.childBackgroundColor} />
        <button onClick={this.handleClick.bind(this)}>Change Color</button>
      </div>
    );
  }
}
