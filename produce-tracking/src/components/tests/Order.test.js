import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Order from '../Order';
import renderer from 'react-test-renderer';

describe('Order', () => {
  const mockOrderData = {
    id: '1',
    title: 'Test Order',
    status: 'Pending',
  };

  const mockDetailsHandler = jest.fn();
  const mockDeleteHandler = jest.fn();

  it('renders correctly', () => {
    const { getByText } = render(
      <Router>
        <Order
          orderData={mockOrderData}
          detailsHandler={mockDetailsHandler}
          deleteHandler={mockDeleteHandler}
          readonly={false}
        />
      </Router>
    );

    expect(getByText('Test Order')).toBeTruthy();
    expect(getByText('Pending')).toBeTruthy();
  });

  it('calls detailsHandler when Details button is clicked', () => {
    const { getByText } = render(
      <Router>
        <Order
          orderData={mockOrderData}
          detailsHandler={mockDetailsHandler}
          deleteHandler={mockDeleteHandler}
          readonly={false}
        />
      </Router>
    );
  
    fireEvent.click(getByText('Details'));
    expect(mockDetailsHandler).toHaveBeenCalledWith(mockOrderData);
  });


  beforeEach(() => {
    localStorage.setItem('role', 'admin');
  });
  
  it('calls deleteHandler when Delete button is clicked', () => {
    const { getByText } = render(
      <Router>
        <Order
          orderData={mockOrderData}
          detailsHandler={mockDetailsHandler}
          deleteHandler={mockDeleteHandler}
          readonly={false}
        />
      </Router>
    );
  
    fireEvent.click(getByText('Delete'));
    expect(mockDeleteHandler).toHaveBeenCalledWith(mockOrderData.id);
  });


  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Order
            orderData={mockOrderData}
            detailsHandler={mockDetailsHandler}
            deleteHandler={mockDeleteHandler}
            readonly={false}
          />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  
});
