import React from 'react';
import styles from './ProductCard.module.css';

export interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  description?: string;
  onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  price,
  description,
  onAddToCart,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.footer}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          {onAddToCart && (
            <button className={styles.button} onClick={onAddToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
