import React from "react";
import ColorFilterItem from './ColorFilterItem';

const ColorFilters = props => {
  const items = props.colors.map((item, key) => <ColorFilterItem active={true} key={key} color={item} />);

  return (
    <div className="color-box">
        {items}
    </div>
  );
};

export default ColorFilters;

