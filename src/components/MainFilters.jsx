import React from "react";
import NamedFilters from "./NamedFilters";
import ColorFilters from "./ColorFilters";

const MainFilters = () => {
  const shapesArr = ["ROUND", "SQUARE", "TRIANGLE", "OVAL", "RECTANGLE"];
  const colorArr = ["gray", "yellow", "blue", "green", "red", "purple"];
  return (
    <div>
      <NamedFilters shapes={shapesArr} />
      <ColorFilters colors={colorArr} />
    </div>
  );
};

export default MainFilters;
