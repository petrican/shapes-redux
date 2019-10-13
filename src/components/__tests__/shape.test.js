'use strict';

import React from 'react';
import Shape from '../Shape';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Shape id="1" color="blue" shape="OVAL" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
