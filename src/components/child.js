import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div
        className="child"
        style={{ backgroundColor: this.props.handleClick }}
      >
        <h2 className="component-header">Child</h2>
      </div>
    );
  }
}
