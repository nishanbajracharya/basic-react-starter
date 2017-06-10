import React from 'react';
import renderer from 'react-test-renderer';
import chai from 'chai';

import App from './App';

// Test using Mocha Chai
describe('App', () => {
  it(`should render a H1 tag with value of 'Hello World'`, () => {
    const output = renderer.create(<App />).toJSON();

    chai.expect(output).to.have.property('type', 'h1');
    chai.expect(output).to.have.deep.property('children', ['Hello World']);
  });
});

// Test using Jest
test(`should render a H1 tag with value of 'Hello World'`, () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
