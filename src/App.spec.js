import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { expect } from 'chai';

import App from './App';

describe('App', () => {
  it(`should render a H1 tag with value of 'Hello World'`, () => {
    const output = ReactTestRenderer.create(<App />).toJSON();

    expect(output).to.have.property('type', 'h1');
    expect(output).to.have.deep.property('children', ['Hello World']);
  });
});
