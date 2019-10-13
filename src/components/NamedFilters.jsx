import React from "react";
import NamedFilterItem from "./NamedFilterItem";

type Props = {
  shapes: array, 
  shapesState: object
};

const NamedFilters =  (props: Props) => {
  const items = props.shapes.map((item, key) => (
    <NamedFilterItem
      active={props.shapesState[item]}
      key={key}
      item={item}
    />
  ));

  return (
    <div className="list-names-box">
      <ul className="list-names">{items}</ul>
    </div>
  );
};

export default NamedFilters;
