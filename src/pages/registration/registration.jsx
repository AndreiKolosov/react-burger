import React, { useState } from 'react';
import styles from './registration.module.css';
import Form from '../../components/form/form';
import FormPrompt from '../../components/form/components/form-prompt/form-prompt';
import InputContainer from '../../components/form/components/input-container/input-container';
import SubmitButton from '../../components/form/components/submit-btn/submit-btn';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

const RegistrationPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <main className={styles.content}>
      <Form title='Регистрация' name='registration'>
        <InputContainer gap='mb-6'>
          <Input
            name='userName'
            value={userName}
            type='text'
            size='default'
            placeholder='Имя'
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </InputContainer>
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
          title='Зарегистрироваться'
          name='login'
          gap='mb-20'
          disabled={userName && email && password ? false : true}
        />
        <FormPrompt link='/login' prompt='Уже зарегистрированы?' linkCaption='Войти' />
      </Form>
    </main>
  );
};

export default RegistrationPage;
