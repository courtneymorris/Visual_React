import React, { Component } from "react";
import Child from "./child";

export default class Parent extends Component {
  constructor(props) {
    super();

    this.state = {
      componentColor: "blue",
    };
  }

  handleClick() {
    if (this.state.componentColor === "blue") {
      this.setState({
        componentColor: "lightcoral",
      });
    } else {
      this.setState({
        componentColor: "blue",
      });
    }
  }

  render() {
    return (
      <div className="parent">
        <h2 className="component-header">Parent</h2>
        <button onClick={this.handleClick.bind(this)}>Toggle Color</button>
        <Child />
      </div>
    );
  }
}
