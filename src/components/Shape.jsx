import React from "react";

const Shape = props => {
  let hexColor = "";
  let formedShape = "";

  switch (props.color) {
    case "red":
      hexColor = "#F40101";
      break;
    case "gray":
      hexColor = "#E1E1E1";
      break;
    case "green":
      hexColor = "#18C82B";
      break;
    case "blue":
      hexColor = "#2B9FFF";
      break;
    case "yellow":
      hexColor = "#F2BF44";
      break;
    case "mauve":
      hexColor = "#890087";
      break;
  }

  switch (props.shape) {
    case "triangle":
      formedShape = (
        <div
          className={`shape-triangle`}
          key={props.key}
          style={{ borderBottom: `125px solid ${hexColor}` }}
        ></div>
      );
      break;
    case "rectangle":   // fix position for both rectangle and oval
    case "oval":
          formedShape = (
            <div
              className={`shape-${props.shape}`}
              style={{ backgroundColor: `${hexColor}`, marginTop: '37px', marginBottom: '38px' }}
              key={props.key}
            ></div>
          );
          break;  
    default:
      formedShape = (
        <div
          className={`shape-${props.shape}`}
          style={{ backgroundColor: `${hexColor}` }}
          key={props.key}
        ></div>
      );
  }

  return <div className="shape-container">{formedShape}</div>;
};

export default Shape;
