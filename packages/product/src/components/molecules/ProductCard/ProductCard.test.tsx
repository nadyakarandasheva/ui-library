import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  it('renders product details', () => {
    render(<ProductCard title="Test Product" image="test.jpg" price={9.99} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$9.99')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'test.jpg');
  });

  it('renders description if provided', () => {
    render(<ProductCard title="Product" image="img.png" price={5} description="Cool product" />);
    expect(screen.getByText('Cool product')).toBeInTheDocument();
  });

  it('calls onAddToCart when button clicked', () => {
    const mockHandler = jest.fn();
    render(<ProductCard title="Product" image="img.png" price={5} onAddToCart={mockHandler} />);
    fireEvent.click(screen.getByText(/add to cart/i));
    expect(mockHandler).toHaveBeenCalled();
  });
});
