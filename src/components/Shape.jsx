import React from "react";

type Props = {
  id: string,
  shape: string,
  color: string
};

const Shape = (props: Props) => {
  let hexColor = "";
  let formedShape = "";

  switch (props.color) {
    case "red":
      hexColor = "#F40101";
      break;
    case "grey":
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
    case "purple":
      hexColor = "#890087";
      break;
    default:
    // do nothing
  }

  switch (props.shape) {
    case "triangle":
      formedShape = (
        <div
          className={`shape-triangle`}
          style={{ borderBottom: `125px solid ${hexColor}` }}
        ></div>
      );
      break;
    case "rectangle": // fix position for both rectangle and oval
    case "oval":
      formedShape = (
        <div
          className={`shape-${props.shape}`}
          style={{
            backgroundColor: `${hexColor}`,
            marginTop: "37px",
            marginBottom: "38px",
            marginLeft: "10px",
            marginRight: "15px"
          }}
        ></div>
      );
      break;
    default:
      formedShape = (
        <div
          className={`shape-${props.shape}`}
          style={{ backgroundColor: `${hexColor}` }}
        ></div>
      );
  }

  return <div className="shape-container">{formedShape}</div>;
};

export default Shape;
