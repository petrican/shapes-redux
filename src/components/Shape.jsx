import React from "react";

const Shape = props => {
  return (
    <div className="shape-container">
      <div
        className={`shape-${props.shape} color-${props.color}`}
        key={props.key}
      ></div>
    </div>
  );
};

export default Shape;
