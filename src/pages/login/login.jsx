import React, { useState } from 'react';
import styles from './login.module.css';
import Form from '../../components/form/form';
import InputContainer from '../../components/form/components/input-container/input-container';
import SubmitButton from '../../components/form/components/submit-btn/submit-btn';
import FormPrompt from '../../components/form/components/form-prompt/form-prompt';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../services/actions/user';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
  const { isAuth } = useSelector((store) => store.user.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(logIn(email, password));
  };

  if (isAuth) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }

  return (
    <main className={styles.content}>
      <Form title='Вход' name='login' onSubmit={submitHandler}>
        <InputContainer gap='mb-6'>
          <Input
            name='email'
            value={email}
            type='text'
            size='default'
            placeholder='E-mail'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer gap='mb-6'>
          <Input
            name='password'
            type={showPass ? 'text' : 'password'}
            value={password}
            size='default'
            placeholder='Пароль'
            icon={!showPass ? 'HideIcon' : 'ShowIcon'}
            onIconClick={() => setShowPass(!showPass)}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputContainer>
        <SubmitButton
          title='Войти'
          disabled={email && password ? false : true}
          name='login'
          gap='mb-20'
        />
        <FormPrompt
          link='/register'
          prompt='Вы — новый пользователь?'
          linkCaption='Зарегистрироваться'
          gap='mb-4'
        />
        <FormPrompt
          link='/forgot-password'
          prompt='Забыли пароль?'
          linkCaption='Восстановить пароль'
        />
      </Form>
    </main>
  );
};

export default LoginPage;
