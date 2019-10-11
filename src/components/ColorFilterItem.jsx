import React from "react";

const ColorFilterItem = props => {
  let setClass = props.active === true ? "active" : "inactive";
 console.log('Color =>', props.color);
  setClass = `${setClass} square-${props.color}`;
  return (
    <div className={setClass} key={props.key}></div>
  );
};

export default ColorFilterItem;