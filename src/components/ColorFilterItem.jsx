import React from "react";

const ColorFilterItem = props => {
  let setClass = props.active === true ? "active" : "inactive";
  setClass = `${setClass} square-${props.color}`;
  return (
    <div className={setClass} id={props.keySet} key={props.keySet}></div>
  );
};

export default ColorFilterItem;