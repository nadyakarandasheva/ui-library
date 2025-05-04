import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FeedbackForm } from '../../../packages/forms/src/components/organisms/FeedbackForm/FeedbackForm';
import React from 'react';

interface FeedbackFormData {
  name: string;
  email: string;
  message: string;
}

const meta: Meta<typeof FeedbackForm> = {
  title: 'Forms/FeedbackForm',
  component: FeedbackForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FeedbackForm>;

const FeedbackFormWrapper = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FeedbackFormData>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data, null, 2));
  });

  return (
    <FeedbackForm
      register={register}
      errors={errors}
      onSubmit={(e) => {
        void onSubmit(e);
      }}
      isSubmitting={isSubmitting}
      isSubmitSuccessful={isSubmitSuccessful}
    />
  );
};

export const Default: Story = {
  render: () => <FeedbackFormWrapper />,
};
