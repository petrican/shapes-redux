import React from "react";

const FilterTitle = props => {
  let theTitle = props.title;

  const supLimitShapes = Object.keys(props.shapesState).length;
  const supLimitColors = Object.keys(props.colorsState).length;

  const trueColors = Object.values(props.colorsState).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const trueShapes = Object.values(props.shapesState).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  // a. When all the colors and shapes are selected: “All items:”
  if (trueColors === supLimitColors && trueShapes === supLimitShapes) {
    theTitle = "All items";
  }

  // b. When all the colors and a multiple shapes are selected: “Multiple items:”
  if (
    trueColors === supLimitColors &&
    (trueShapes < supLimitShapes && trueShapes > 1)
  ) {
    theTitle = "Multiple items";
  }

  // c. When all the shapes and multiple colors are selected: “Multiple items:”
  if (
    trueShapes === supLimitShapes &&
    (trueColors < supLimitColors && trueColors > 1)
  ) {
    theTitle = "Multiple items";
  }

  // d. When all the shapes and a single color is selected: “All red items:”
  if (trueShapes === supLimitShapes && trueColors === 1) {
    let singleColor = Object.keys(props.colorsState).filter(
      key => props.colorsState[key] === true
    );
    theTitle = `All ${singleColor} items`;
  }

  // e. When all the colors and single shape is selected: “All round items:”
  if (trueColors === supLimitColors && trueShapes === 1) {
    let singleShape = Object.keys(props.shapesState).filter(
      key => props.shapesState[key] === true
    );
    theTitle = `All ${singleShape} items`;
  }

  // f. When multiple the shapes and a single color is selected: “Multiple red items:”
  if ((trueShapes < supLimitShapes && trueShapes > 1) && trueColors === 1) {
    let singleColor = Object.keys(props.colorsState).filter(
      key => props.colorsState[key] === true
    );
    theTitle = `Multiple ${singleColor} items`;
  }

  // g. When multiple the colors and single shape is selected: “Multiple round items:”
  if ((trueColors < supLimitColors && trueColors > 1) && trueShapes === 1) {
    let singleShape = Object.keys(props.shapesState).filter(
      key => props.shapesState[key] === true
    );
    theTitle = `Multiple ${singleShape} items`;
  }

  // h: When a single color and single shape is selected: “Round red items:”
  if (trueColors === 1 && trueShapes === 1) {
    let singleShape = Object.keys(props.shapesState).filter(
      key => props.shapesState[key] === true
    );
    let singleColor = Object.keys(props.colorsState).filter(
        key => props.colorsState[key] === true
      );
    theTitle = `${singleShape} ${singleColor} items`;
  }
  return <div className="filter-title">{theTitle}:</div>;
};

export default FilterTitle;
