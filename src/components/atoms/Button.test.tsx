import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button'; // путь до компонента
import '@testing-library/jest-dom';

describe('Button component', () => {
  it('renders with correct label', () => {
    render(<Button label="Click me" onClick={() => { }} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);

    const button = screen.getByText('Click me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
