import React, { FC, FormEvent, useCallback, useState } from 'react';
import styles from './reset-password.module.css';
import Form from '../../components/form/form';
import InputContainer from '../../components/form/components/input-container/input-container';
import SubmitButton from '../../components/form/components/submit-btn/submit-btn';
import FormPrompt from '../../components/form/components/form-prompt/form-prompt';
import Loader from '../../components/loader/loader';
import Notification from '../../components/notification/notification';
import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { resetPassword, resetPwdResetErr } from '../../services/actions/user';
import { Redirect, useLocation } from 'react-router-dom';
import { IResetPassword } from './reset-password.props';
import { useAppDispatch, useAppSelector } from '../../services/store';

const ResetPasswordPage: FC<IResetPassword> = () => {
  const { user, errMessage, passwordResetRequest, passwordResetErr, isPasswordReset } = useAppSelector(
    (store) => store.user
  );
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const location = useLocation<{ from: string }>();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      dispatch(resetPassword(password, token));
    },
    [dispatch, password, token]
  );

  const resetError = useCallback(() => {
    dispatch(resetPwdResetErr());
  }, [dispatch]);

  if (user) {
    return <Redirect to={location.state?.from || '/'} />;
  }

  if (isPasswordReset) {
    return (
      <Redirect
        to={{
          pathname: '/login',
        }}
      />
    );
  }

  return (
    <main className={styles.content}>
      {passwordResetRequest && !passwordResetErr && <Loader />}
      {!passwordResetRequest && !passwordResetErr && (
        <Form title="Восстановление пароля" name="reset-password" onSubmit={handleSubmit}>
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
          <InputContainer gap="mb-6">
            <Input
              name="token"
              value={token}
              type="text"
              size="default"
              placeholder="Введите код из письма"
              onChange={(e) => {
                setToken(e.target.value);
              }}
            />
          </InputContainer>
          <SubmitButton
            title="Восстановить"
            disabled={password && token ? false : true}
            name="reset-password"
            gap="mb-20"
          />
          <FormPrompt link="/login" prompt="Вспомнили пароль?" linkCaption="Войти" />
        </Form>
      )}
      {!passwordResetRequest && passwordResetErr && (
        <Notification title="Упс, кажется, произошла ошибка... " message={errMessage} onClose={resetError} canGoHome />
      )}
    </main>
  );
};

export default ResetPasswordPage;
