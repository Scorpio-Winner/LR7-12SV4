import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(getByText('Produce Tracking')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
