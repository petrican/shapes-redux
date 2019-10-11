import React from "react";
import Shape from './Shape';

const ListingContainer = props => {
  // const items = props.colors.map((item, key) => <Shape active={true} key={key} color={item} />);

  return (
    <div className="listing-container">
        <Shape shape="round" color="red" />
        <Shape shape="rectangle" color="blue" />
        <Shape shape="oval" color="green" />
        <Shape shape="triangle" color="yellow" />
        <Shape shape="square" color="mauve" />
    </div>
  );
};

export default ListingContainer;
