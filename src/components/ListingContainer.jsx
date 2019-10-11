import React from "react";
import Shape from './Shape';

const ListingContainer = props => {
  // const items = props.colors.map((item, key) => <Shape active={true} key={key} color={item} />);

  return (
    <div className="listing-container">
        <Shape shape="round" key="1" color="red" />
        <Shape shape="rectangle" key="2" color="blue" />
        <Shape shape="oval" key="3" color="green" />
        <Shape shape="triangle" key="4" color="yellow" />
        <Shape shape="square" key="5" color="mauve" />
    </div>
  );
};

export default ListingContainer;
