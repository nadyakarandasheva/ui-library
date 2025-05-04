import React from 'react';
import styles from './InputWithLabel.module.css';

interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  register?: ReturnType<any>;
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  id,
  error,
  register,
  ...inputProps
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          {...inputProps}
          {...(register || {})}
        />
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};