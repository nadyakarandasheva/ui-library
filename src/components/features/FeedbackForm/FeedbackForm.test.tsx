import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useForm } from 'react-hook-form';
import { FeedbackForm } from './FeedbackForm';
import { ReactElement } from 'react';

interface FeedbackFormData {
  name: string;
  email: string;
  message: string;
}

const Wrapper = ({ onSubmit }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }): ReactElement => {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FeedbackFormData>();

  return (
    <FeedbackForm
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      isSubmitSuccessful={isSubmitSuccessful}
      onSubmit={onSubmit}
    />
  );
};

describe('FeedbackForm', () => {
  it('отображает все поля формы', () => {
    render(<Wrapper onSubmit={() => { }} />);
    expect(screen.getByLabelText('Имя')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Сообщение')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /отправить/i })).toBeInTheDocument();
  });

  it('вызывает onSubmit при отправке формы', () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    render(<Wrapper onSubmit={handleSubmit} />);

    fireEvent.submit(screen.getByRole('button', { name: /отправить/i }));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
