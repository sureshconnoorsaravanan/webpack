import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  // Snapshot test
  test('matches the snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Test if all the links are rendered correctly
  test('renders Privacy Policy, Terms of Service, and Contact Us links', () => {
    render(<Footer />);

    // Check if each link is present in the document
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();

    // Check if the links point to the correct URLs
    expect(screen.getByText('Privacy Policy').closest('a')).toHaveAttribute('href', '/privacy-policy');
    expect(screen.getByText('Terms of Service').closest('a')).toHaveAttribute('href', '/terms-of-service');
    expect(screen.getByText('Contact Us').closest('a')).toHaveAttribute('href', '/contact');
  });

  // Test if the current year is rendered correctly
  test('renders the current year', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    // Check if the year is rendered in the paragraph
    expect(screen.getByText(`© ${currentYear} E-commerce Store. All Rights Reserved.`)).toBeInTheDocument();
  });
});
