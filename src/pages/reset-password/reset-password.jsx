import React, { useState } from 'react';
import styles from './reset-password.module.css';
import Form from '../../components/form/form';
import InputContainer from '../../components/form/components/input-container/input-container';
import SubmitButton from '../../components/form/components/submit-btn/submit-btn';
import FormPrompt from '../../components/form/components/form-prompt/form-prompt';
import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../services/actions/user';

const ResetPasswordPage = () => {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(password, token));
  };

  return (
    <main className={styles.content}>
      <Form title='Восстановление пароля' name='reset-password' onSubmit={submitHandler}>
        <InputContainer gap='mb-6'>
          <PasswordInput
            name='password'
            value={password}
            size='default'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer gap='mb-6'>
          <Input
            name='token'
            value={token}
            type='text'
            size='default'
            placeholder='Введите код из письма'
            onChange={(e) => {
              setToken(e.target.value);
            }}
          />
        </InputContainer>
        <SubmitButton
          title='Восстановить'
          disabled={password && token ? false : true}
          name='reset-password'
          gap='mb-20'
        />
        <FormPrompt link='/login' prompt='Вспомнили пароль?' linkCaption='Войти' />
      </Form>
    </main>
  );
};

export default ResetPasswordPage;
