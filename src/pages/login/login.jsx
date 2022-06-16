import React, { useState } from 'react';
import styles from './login.module.css';
import Form from '../../components/form/form';
import InputContainer from '../../components/form/components/input-container/input-container';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <main className={styles.content}>
      <Form title='Вход'>
        <InputContainer>
          <Input
            name='email'
            value={email}
            type='text'
            size='default'
            placeholder='E-mail'
            className={styles.content__formInput}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name='password'
            type={showPass ? 'text' : 'password'}
            value={password}
            size='default'
            placeholder='Пароль'
            className={styles.content__formInput}
            icon={!showPass ? 'HideIcon' : 'ShowIcon'}
            onIconClick={() => setShowPass(!showPass)}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputContainer>
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
          disabled={email || password ? false : true}>
          Войти
        </Button>
      </Form>
    </main>
  );
};

export default LoginPage;
