import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extended matchers
import Home from '../Home'; // Adjust the import path as needed

describe('Home Component', () => {
  // Snapshot test
  test('matches the snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Test if welcome note is rendered
  test('renders welcome note', () => {
    render(<Home />);
    const welcomeNote = screen.getByText(/Welcome to Our E-commerce Store!/i);
    expect(welcomeNote).toBeInTheDocument();
  });

  // Test if welcome message is rendered
  test('renders welcome message', () => {
    render(<Home />);
    const welcomeMessage = screen.getByText(/Discover amazing products and shop your favorites at the best prices!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  // Test if promotional texts are rendered
  test('renders promotional texts and lists', () => {
    render(<Home />);
    
    const featuredProductsHeader = screen.getByText(/Featured Products/i);
    const whyChooseUsHeader = screen.getByText(/Why Choose Us?/i);
    
    expect(featuredProductsHeader).toBeInTheDocument();
    expect(whyChooseUsHeader).toBeInTheDocument();

    const reasons = [
      "Exclusive Deals & Discounts",
      "Quality Assurance on All Products",
      "Fast & Reliable Shipping",
      "Customer Satisfaction Guarantee",
    ];

    reasons.forEach((reason) => {
      const listItem = screen.getByText(reason);
      expect(listItem).toBeInTheDocument();
    });
  });

  // Test if the last message is rendered
  test('renders the last shopping message', () => {
    render(<Home />);
    const shoppingMessage = screen.getByText(/Start shopping now and enjoy a seamless online shopping experience!/i);
    expect(shoppingMessage).toBeInTheDocument();
  });
});
