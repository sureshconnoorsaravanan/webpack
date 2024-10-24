import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Navbar Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    // Set up mock for useNavigate
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mock data between tests
  });

  // Snapshot test
  test('matches the snapshot', () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Test navigation on title click
  test('navigates to home page when clicking on the title', () => {
    render(<Navbar />);

    // Find the title (E-commerce)
    const title = screen.getByText('E-commerce');
    expect(title).toBeInTheDocument();

    // Simulate a click event on the title
    fireEvent.click(title);

    // Ensure that useNavigate has been called with "/"
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  // Test if the notification and cart icons are rendered
//   test('renders notification and cart icons', () => {
//     render(<Navbar />);

//     // Check if the notification icon is rendered
//     const notificationIcon = screen.getByTestId('IoIosNotifications');
//     expect(notificationIcon).toBeInTheDocument();

//     // Check if the cart icon is rendered
//     const cartIcon = screen.getByTestId('FaShoppingCart');
//     expect(cartIcon).toBeInTheDocument();
//   });
});
