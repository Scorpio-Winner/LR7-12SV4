import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import OrderDetails from '../OrderDetails';

describe('OrderDetails', () => {
  const mockOrder = {
    id: '1',
    title: 'Test Order',
    status: 'Pending',
  };

  const mockCompanyInfo = {
    items: [
      {
        name: 'Test Order',
        location: 'Test Location',
        established_year: '2000',
        industry: 'Test Industry',
        employees: '100',
        revenue: '1000000',
        website: 'www.test.com',
        description: 'Test Description',
      },
    ],
  };

  it('renders correctly', () => {
    const { getByText } = render(
      <Router>
        <OrderDetails order={mockOrder} companyInfo={mockCompanyInfo} />
      </Router>
    );

    expect(getByText('Test Order')).toBeTruthy();
    expect(getByText('Pending')).toBeTruthy();
  });

  beforeEach(() => {
    localStorage.setItem('role', 'admin');
  });
  
  it('shows customer details when button is clicked', () => {
    const { getByText, queryByText } = render(
      <Router>
        <OrderDetails order={mockOrder} companyInfo={mockCompanyInfo} />
      </Router>
    );
  
    fireEvent.click(getByText('Show Customer Details'));
    expect(queryByText('Hide Customer Details')).toBeTruthy();
  });
  

  it('hides customer details when button is clicked twice', () => {
    const { getByText, queryByText } = render(
      <Router>
        <OrderDetails order={mockOrder} companyInfo={mockCompanyInfo} />
      </Router>
    );

    fireEvent.click(getByText('Show Customer Details'));
    fireEvent.click(getByText('Hide Customer Details'));
    expect(queryByText('Location: Test Location')).toBeNull();
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <OrderDetails order={mockOrder} companyInfo={mockCompanyInfo} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches the snapshot when customer details are shown', () => {
    const { getByText } = render(
      <Router>
        <OrderDetails order={mockOrder} companyInfo={mockCompanyInfo} />
      </Router>
    );

    fireEvent.click(getByText('Show Customer Details'));

    const tree = renderer
      .create(
        <Router>
          <OrderDetails order={mockOrder} companyInfo={mockCompanyInfo} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
