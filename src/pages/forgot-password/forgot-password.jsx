import React, { useState } from 'react';
import styles from './forgot-password.module.css';
import Form from '../../components/form/form';
import InputContainer from '../../components/form/components/input-container/input-container';
import SubmitButton from '../../components/form/components/submit-btn/submit-btn';
import FormPrompt from '../../components/form/components/form-prompt/form-prompt';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  return (
    <main className={styles.content}>
      <Form title='Восстановление пароля' name='forgot-password'>
        <InputContainer gap='mb-6'>
          <Input
            name='email'
            value={email}
            type='text'
            size='default'
            placeholder='Укажите e-mail'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputContainer>
        <SubmitButton
          title='Восстановить'
          disabled={email ? false : true}
          name='forgot-password'
          gap='mb-20'
        />
        <FormPrompt link='/login' prompt='Вспомнили пароль?' linkCaption='Войти' />
      </Form>
    </main>
  );
};

export default ForgotPasswordPage;
