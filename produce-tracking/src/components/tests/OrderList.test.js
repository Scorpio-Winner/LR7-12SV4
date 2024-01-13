import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import OrderList from '../OrderList';  

describe('OrderList', () => {
  const mockOrders = {
    items: [
      {
        id: '1',
        title: 'Test Order',
        status: 'Pending',
        creation_date: '2022-02-02',
        customer: 'Test Customer',
        complete_time: '33 days',
        description: 'Test description'
      },
    ],
  };

  const mockOrderStatuses = ['Pending', 'In Progress', 'Completed'];

  it('renders correctly', () => {
    const { getByText } = render(
      <Router>
        <OrderList orders={mockOrders} orderStatuses={mockOrderStatuses} />
      </Router>
    );

    expect(getByText('Test Order')).toBeTruthy();
    expect(getByText('Pending')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <OrderList orders={mockOrders} orderStatuses={mockOrderStatuses} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
