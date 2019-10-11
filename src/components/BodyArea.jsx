import React from "react";
import MainFilters from './MainFilters';
import FilterTitle from './FilterTitle';

const BodyArea = props => (
  <div className="body-area">
     <MainFilters />
     <FilterTitle title="Filter title"></FilterTitle>
  </div>
);

export default BodyArea;
