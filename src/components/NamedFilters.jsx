import React from "react";
import NamedFilterItem from './NamedFilterItem';

const NamedFilters = props => {
  const items = props.shapes.map((item, key) => <NamedFilterItem active={true} key={key} item={item} />);

  return (
    <div className="list-names-box">
      <ul className="list-names">
        {items}
      </ul>
    </div>
  );
};

export default NamedFilters;
