import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigation from '../Navigation';

describe('Navigation', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders correctly for admin role', () => {
    localStorage.setItem('role', 'admin');
    const tree = renderer
      .create(
        <Router>
          <Navigation />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for non-admin role', () => {
    localStorage.setItem('role', 'user');
    const tree = renderer
      .create(
        <Router>
          <Navigation />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when role is not set', () => {
    const tree = renderer
      .create(
        <Router>
          <Navigation />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when role is null', () => {
    localStorage.setItem('role', null);
    const tree = renderer
      .create(
        <Router>
          <Navigation />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
