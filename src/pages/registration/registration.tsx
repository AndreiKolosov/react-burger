import React, { FC, useCallback, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import styles from './registration.module.css';
import Form from '../../components/form/form';
import FormPrompt from '../../components/form/components/form-prompt/form-prompt';
import InputContainer from '../../components/form/components/input-container/input-container';
import SubmitButton from '../../components/form/components/submit-btn/submit-btn';
import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { createNewUser, resetRegisterError } from '../../services/actions/user';
import { emailRegExp } from '../../utils/validate';
import Loader from '../../components/loader/loader';
import Notification from '../../components/notification/notification';
import { IRegistration } from './registration.props';
import { useAppDispatch, useAppSelector } from '../../services/store';

const RegistrationPage: FC<IRegistration> = () => {
  const { user, errMessage, registerUserRequest, registerUserErr } = useAppSelector((store) => store.user);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasEmailErr, setHasEmailErr] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation<{ from: string }>();

  const validateEmail = useCallback(() => {
    email && setHasEmailErr(!emailRegExp.test(email));
  }, [email]);

  const onEmailFocus = () => {
    setHasEmailErr(false);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(createNewUser(userName, email, password));
    },
    [dispatch, userName, email, password]
  );

  const resetError = useCallback(() => {
    dispatch(resetRegisterError());
  }, [dispatch]);

  if (user) {
    return <Redirect to={location.state?.from || '/'} />;
  }

  return (
    <main className={styles.content}>
      {registerUserRequest && !registerUserErr && <Loader />}
      {!registerUserRequest && !registerUserErr && (
        <Form title="Регистрация" name="registration" onSubmit={handleSubmit}>
          <InputContainer gap="mb-6">
            <Input
              name="userName"
              value={userName}
              type="text"
              size="default"
              placeholder="Имя"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer gap="mb-6">
            <Input
              name="email"
              value={email}
              type="text"
              size="default"
              placeholder="E-mail"
              errorText="Некорректный email"
              error={hasEmailErr}
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
            title="Зарегистрироваться"
            name="registration"
            gap="mb-20"
            disabled={userName && email && password && !hasEmailErr ? false : true}
          />
          <FormPrompt link="/login" prompt="Уже зарегистрированы?" linkCaption="Войти" />
        </Form>
      )}
      {!registerUserRequest && registerUserErr && (
        <Notification heading="Что-то пошло не так... :(" message={errMessage} onClose={resetError} canGoHome />
      )}
    </main>
  );
};

export default RegistrationPage;
