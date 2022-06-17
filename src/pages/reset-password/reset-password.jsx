import React, { useState } from 'react';
import styles from './reset-password.module.css';
import Form from '../../components/form/form';
import InputContainer from '../../components/form/components/input-container/input-container';
import SubmitButton from '../../components/form/components/submit-btn/submit-btn';
import FormPrompt from '../../components/form/components/form-prompt/form-prompt';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

const ResetPasswordPage = () => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <main className={styles.content}>
      <Form title='Восстановление пароля' name='reset-password'>
        <InputContainer gap='mb-6'>
          <Input
            name='password'
            type={showPass ? 'text' : 'password'}
            value={password}
            size='default'
            placeholder='Введите новый пароль'
            icon={!showPass ? 'HideIcon' : 'ShowIcon'}
            onIconClick={() => setShowPass(!showPass)}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer gap='mb-6'>
          <Input
            name='code'
            value={code}
            type='text'
            size='default'
            placeholder='Введите код из письма'
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </InputContainer>
        <SubmitButton
          title='Восстановить'
          disabled={password && code ? false : true}
          name='reset-password'
          gap='mb-20'
        />
        <FormPrompt link='/login' prompt='Вспомнили пароль?' linkCaption='Войти' />
      </Form>
    </main>
  );
};

export default ResetPasswordPage;
