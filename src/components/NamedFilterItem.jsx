import React from "react";

const NameFilterItem = props => {
  const activeFlag = props.active === true ? "name-active" : "name-inactive";

  return (
    <li className={activeFlag} key={props.key}>
      {props.item}
    </li>
  );
};

export default NameFilterItem;
