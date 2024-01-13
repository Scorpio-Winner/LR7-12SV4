import { render, screen } from '@testing-library/react';
import Footer from '../Footer';


test('get GitHub link', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/GitHub/i);
    expect(linkElement).toBeTruthy();
  });

  test('get current year', () => {
    const { getByText } = render(<Footer />);
    const yearElement = getByText(/2023/);
    expect(yearElement).toBeTruthy();
  });

  test('get GitHub link', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/GitHub/i);
    expect(linkElement).toMatchSnapshot();
  });

  test('get current year', () => {
    const { getByText } = render(<Footer />);
    const yearElement = getByText(/2023/);
    expect(yearElement).toMatchSnapshot();
  });

