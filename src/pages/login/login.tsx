import React, { FC, FormEvent, useCallback, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { logIn, resetLogInErr } from '../../services/actions/user';
import { emailRegExp } from '../../utils/validate';
import styles from './login.module.css';
import Form from '../../components/form/form';
import InputContainer from '../../components/form/components/input-container/input-container';
import SubmitButton from '../../components/form/components/submit-btn/submit-btn';
import FormPrompt from '../../components/form/components/form-prompt/form-prompt';
import Loader from '../../components/loader/loader';
import Notification from '../../components/notification/notification';
import { ILogin } from './login.props';
import { useAppDispatch, useAppSelector } from '../../services/store';

const LoginPage: FC<ILogin> = () => {
  const { user, logInRequest, logInErr, errMessage, isPasswordReset, getUserRequest } = useAppSelector(
    (store) => store.user
  );
  const [email, setEmail] = useState('');
  const [hasEmailErr, setHasEmailErr] = useState(false);
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const location = useLocation<{ from: string }>();
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      dispatch(logIn(email, password));
    },
    [dispatch, email, password]
  );

  const validateEmail = useCallback(() => {
    email && setHasEmailErr(!emailRegExp.test(email));
  }, [email]);

  const onEmailFocus = () => {
    setHasEmailErr(false);
  };

  const resetError = useCallback(() => {
    dispatch(resetLogInErr());
  }, [dispatch]);

  if (user) {
    return <Redirect to={location.state?.from || '/'} />;
  }

  return (
    <main className={styles.content}>
      {logInRequest && !logInErr && getUserRequest && <Loader />}
      {!logInRequest && !logInErr && !getUserRequest && (
        <Form title="Вход" name="login" onSubmit={handleSubmit}>
          <InputContainer gap="mb-6">
            <Input
              name="email"
              value={email}
              errorText="Некорректный email"
              error={hasEmailErr}
              type="text"
              size="default"
              placeholder="E-mail"
              onBlur={validateEmail}
              onFocus={onEmailFocus}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer gap="mb-6">
            <PasswordInput
              name="password"
              value={password}
              size="default"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputContainer>
          <SubmitButton
            title="Войти"
            disabled={email && password && !hasEmailErr ? false : true}
            name="login"
            gap="mb-20"
          />
          <FormPrompt link="/register" prompt="Вы — новый пользователь?" linkCaption="Зарегистрироваться" gap="mb-4" />
          <FormPrompt link="/forgot-password" prompt="Забыли пароль?" linkCaption="Восстановить пароль" />
        </Form>
      )}
      {!logInRequest && logInErr && (
        <Notification heading="Что-то пошло не так... :(" message={errMessage} onClose={resetError} canGoHome />
      )}
      {isPasswordReset && (
        <Notification
          heading="Пароль успешно изменен!"
          message="Попробуйте выполнить вход или вернитесь на главную страницу."
          canGoHome
        />
      )}
    </main>
  );
};

export default LoginPage;
