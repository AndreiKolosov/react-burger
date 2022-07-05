import React, { useCallback, useState } from 'react';
import styles from './forgot-password.module.css';
import Form from '../../components/form/form';
import InputContainer from '../../components/form/components/input-container/input-container';
import SubmitButton from '../../components/form/components/submit-btn/submit-btn';
import FormPrompt from '../../components/form/components/form-prompt/form-prompt';
import Loader from '../../components/loader/loader';
import Notification from '../../components/notification/notification';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { recoverPassword, resetPwdRecoverErr } from '../../services/actions/user';
import { emailRegExp } from '../../utils/validate';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [hasEmailErr, setHasEmailErr] = useState(false);
  const { user, canResetPassword, passwordRecoverRequest, passwordRecoverErr, errMessage } =
    useSelector((store) => store.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(recoverPassword(email));
    },
    [dispatch, email]
  );

  const validateEmail = useCallback(() => {
    email && setHasEmailErr(!emailRegExp.test(email));
  }, [email]);

  const onEmailFocus = useCallback(() => {
    setHasEmailErr(false);
  });

  const resetError = useCallback(() => {
    dispatch(resetPwdRecoverErr());
  }, [dispatch]);

  if (user) {
    return <Redirect to={location.state?.from || '/'} />;
  }

  if (canResetPassword) {
    return (
      <Redirect
        to={{
          pathname: '/reset-password',
        }}
      />
    );
  }

  return (
    <main className={styles.content}>
      {passwordRecoverRequest && !passwordRecoverErr && <Loader />}
      {!passwordRecoverErr && !passwordRecoverRequest && (
        <Form title='Восстановление пароля' name='forgot-password' onSubmit={handleSubmit}>
          <InputContainer gap='mb-6'>
            <Input
              name='email'
              value={email}
              errorText='Некорректный email'
              error={hasEmailErr}
              type='text'
              size='default'
              placeholder='Укажите e-mail'
              onBlur={validateEmail}
              onFocus={onEmailFocus}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputContainer>
          <SubmitButton
            title='Восстановить'
            disabled={email && !hasEmailErr ? false : true}
            name='forgot-password'
            gap='mb-20'
          />
          <FormPrompt link='/login' prompt='Вспомнили пароль?' linkCaption='Войти' />
        </Form>
      )}
      {!passwordRecoverRequest && passwordRecoverErr && (
        <Notification
          heading='Кажется, произошла ошибка...'
          message={errMessage}
          onClose={resetError}
          canGoHome
        />
      )}
    </main>
  );
};

export default ForgotPasswordPage;
