import React from 'react';
import type { FieldErrors, UseFormReturn } from 'react-hook-form';

import { InputWithLabel } from '../../../../../common/src/components/molecules/InputWithLabel/InputWithLabel';

import styles from './FeedbackForm.module.css';

interface FeedbackFormData {
  name: string;
  email: string;
  message: string;
}

interface FeedbackFormProps {
  register: UseFormReturn<FeedbackFormData>['register'];
  errors: FieldErrors<FeedbackFormData>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting?: boolean;
  isSubmitSuccessful?: boolean;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({
  register,
  errors,
  onSubmit,
  isSubmitting,
  isSubmitSuccessful,
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <InputWithLabel
        id="name"
        label="Имя"
        placeholder="Введите ваше имя"
        register={register('name')}
        error={errors.name?.message}
      />
      <InputWithLabel
        id="email"
        label="Email"
        type="email"
        placeholder="example@mail.com"
        register={register('email')}
        error={errors.email?.message}
      />
      <div className={styles.textareaWrapper}>
        <label htmlFor="message" className={styles.label}>Сообщение</label>
        <textarea
          id="message"
          className={`${styles.textarea} ${errors.message ? styles.textareaError : ''}`}
          placeholder="Введите ваше сообщение"
          {...register('message')}
        />
        {errors.message && <span className={styles.error}>{errors.message.message}</span>}
      </div>
      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting ? 'Отправка...' : 'Отправить'}
      </button>
      {isSubmitSuccessful && <div className={styles.success}>Форма успешно отправлена!</div>}
    </form>
  );
};
