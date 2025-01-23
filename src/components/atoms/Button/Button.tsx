import React from 'react';

import styles from './Button.module.css';

interface IButtonProps {
  label: string;
  onClick?: () => void
}

export const Button: React.FC<IButtonProps> = ({ label, onClick }) => {
  return <Button className={styles.buttonPrimary} onClick={onClick}>{label}</Button>;
};