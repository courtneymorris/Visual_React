import React from "react";

export default function Child(props) {
  return (
    <div className="child" style={{ backgroundColor: props.backgroundColor }}>
      <h1>Child</h1>
    </div>
  );
}
