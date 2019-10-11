import React from "react";
import MainFilters from './MainFilters';
import FilterTitle from './FilterTitle';
import ListingContainer from "./ListingContainer";

const BodyArea = props => {
  console.log(props);
  return (
  <div className="body-area">
     <MainFilters />
     <FilterTitle title="Filter title"></FilterTitle>
     <ListingContainer />
  </div>
)};

export default BodyArea;
