import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

// Test using Jest
test(`should render a H1 tag with value of 'Hello World'`, () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
