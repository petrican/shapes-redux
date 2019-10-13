import React from "react";
import ColorFilterItem from "./ColorFilterItem";

type Props = {
  shapesState: object, 
  colorsState: object,
  colors: array
};

const ColorFilters = (props: Props) => {
  const items = props.colors.map((item, key) => (
    <ColorFilterItem active={props.colorsState[item]} key={key} color={item} />
  ));

  return <div className="color-box">{items}</div>;
};

export default ColorFilters;
