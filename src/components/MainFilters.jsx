import React from "react";
import NamedFilters from "./NamedFilters";
import ColorFilters from "./ColorFilters";

const MainFilters = (props) => {
  return (
    <div>
      <NamedFilters {...props} />
      <ColorFilters {...props} />
    </div>
  );
};

export default MainFilters;
