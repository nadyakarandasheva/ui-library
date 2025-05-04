import type { Meta, StoryObj } from '@storybook/react';
import { InputWithLabel } from '../../../packages/common/src/components/molecules/InputWithLabel/InputWithLabel';

const meta: Meta<typeof InputWithLabel> = {
  title: 'Common/molecules/InputWithLabel',
  component: InputWithLabel,
  tags: ['autodocs'],
  args: {
    id: 'username',
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export default meta;
type Story = StoryObj<typeof InputWithLabel>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: 'Поле обязательно для заполнения',
  },
};
