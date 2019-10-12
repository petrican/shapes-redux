import React from "react";
import Shape from "./Shape";

const ListingContainer = props => {
  let items = [];
  if (typeof props.items !== "undefined") {
    items = props.items.map((item, key) => {
      return (
        props.shapesState[item.shape.toUpperCase()] &&
        props.colorsState[item.color] && (
          <Shape
            key={`shape-${key}`}
            id={`shape-${key}`}
            shape={item.shape}
            color={item.color}
          />
        )
      );
    });
  }

  return <div className="listing-container">{items}</div>;
};

export default ListingContainer;
