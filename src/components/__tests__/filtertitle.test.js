'use strict';

import React from 'react';
import FilterTitle from '../FilterTitle';
import renderer from 'react-test-renderer';

it('renders correctly', () => {

 const shapesState = {
        ROUND: true,
        SQUARE: true,
        TRIANGLE: true,
        OVAL: true,
        RECTANGLE: true
      };
 const colorsState = {
        grey: true,
        yellow: true,
        blue: true,
        green: true,
        red: true,
        purple: true
      };
  const tree = renderer
    .create( <FilterTitle shapesState={shapesState} colorsState={colorsState} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
