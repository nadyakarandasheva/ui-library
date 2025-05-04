import { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    title: 'Stylish Chair',
    image: 'https://via.placeholder.com/300x200.png?text=Chair',
    price: 49.99,
    description: 'Comfortable and elegant chair for your living room.',
    onAddToCart: () => alert('Added to cart!'),
  },
};

export const WithoutDescription: Story = {
  args: {
    title: 'Minimal Lamp',
    image: 'https://via.placeholder.com/300x200.png?text=Lamp',
    price: 19.99,
  },
};
