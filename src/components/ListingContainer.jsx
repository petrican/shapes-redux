import React from "react";
import Shape from './Shape';

const ListingContainer = props => {
  // const items = props.colors.map((item, key) => <Shape active={true} key={key} color={item} />);

  return (
    <div className="listing-container">
        <Shape shape="round" key="1" color="red" />
        <Shape shape="round" key="2" color="blue" />
        <Shape shape="round" key="3" color="green" />
        <Shape shape="round" key="4" color="yellow" />
        <Shape shape="round" key="5" color="mauve" />
    </div>
  );
};

export default ListingContainer;
