import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputWithLabel } from './InputWithLabel';

describe('InputWithLabel', () => {
  it('рендерит метку и инпут', () => {
    render(<InputWithLabel id="test-input" label="Test Label" placeholder="Введите значение" />);

    const input = screen.getByPlaceholderText('Введите значение');
    const label = screen.getByLabelText('Test Label');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'test-input');
  });

  it('рендерит сообщение об ошибке при передаче error', () => {
    render(
      <InputWithLabel
        id="email"
        label="Email"
        placeholder="example@mail.com"
        error="Поле обязательно"
      />
    );

    const error = screen.getByText('Поле обязательно');
    expect(error).toBeInTheDocument();
  });
});
