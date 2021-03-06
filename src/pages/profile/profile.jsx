import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './profile.module.css';
import ProfileNav from '../../components/profile-nav/profile-nav';
import Form from '../../components/form/form';
import InputContainer from '../../components/form/components/input-container/input-container';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import FormControls from '../../components/form/components/form-controls/form-controls';
import SubmitButton from '../../components/form/components/submit-btn/submit-btn';
import { patchUser, resetPatchUserErr } from '../../services/actions/user';
import { emailRegExp } from '../../utils/validate';
import Loader from '../../components/loader/loader';
import Notification from '../../components/notification/notification';
import { getCookie } from '../../utils/cookie';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const [isDataChanged, setIsDataChanged] = useState(false);
  const [current, setCurrent] = useState('');
  const [name, setName] = useState('');
  const [hasNameErr, setHasNameErr] = useState(false);
  const [email, setEmail] = useState('');
  const [hasEmailErr, setHasEmailErr] = useState(false);
  const [password, setPassword] = useState('');
  const [hasPasswordErr, setHasPasswordErr] = useState(false);
  const ref = useRef(null);
  const { user, patchUserRequest, patchUserFailed, isUserChanged, errMessage } = useSelector(
    (store) => store.user
  );
  const accessToken = getCookie('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setName(user.name);
    }
  }, [user]);

  const onEmailFocus = () => {
    setHasEmailErr(false);
    setCurrent('email');
  };

  const onNameFocus = useCallback(() => {
    setHasNameErr(false);
    setCurrent('name');
  });

  const onPasswordFocus = useCallback(() => {
    setHasPasswordErr(false);
    setCurrent('password');
  });

  const validateEmail = useCallback(() => {
    email && setHasEmailErr(!emailRegExp.test(email));
    setCurrent('');
  }, [email]);

  const validateName = useCallback(() => {
    (name.length > 20 || name.length < 3) && setHasNameErr(true);
    setCurrent('');
  }, [name]);

  const validatePassword = useCallback(() => {
    password && password.length < 5 && setHasPasswordErr(true);
    setCurrent('');
  });

  const onInputChange = useCallback((e, dataValue, setNewValue) => {
    const newValue = e.target.value;
    setNewValue(newValue);
    newValue === dataValue ? setIsDataChanged(false) : setIsDataChanged(true);
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(patchUser({ accessToken: `Bearer ${accessToken}`, name, email, password }));
    },
    [dispatch, name, email, password, accessToken]
  );

  const handleCancel = useCallback(
    (e) => {
      e.preventDefault();
      setEmail(user.email);
      setName(user.name);
      setPassword('');
      setHasEmailErr(false);
      setHasNameErr(false);
      setHasPasswordErr(false);
      setIsDataChanged(false);
    },
    [user.name, user.email]
  );

  const resetError = useCallback(() => {
    dispatch(resetPatchUserErr());
  }, [dispatch]);

  return (
    <main className={styles.content}>
      <aside className={styles.sidebar}>
        <ProfileNav />
      </aside>
      <section className={styles.profile}>
        {patchUserRequest && !patchUserFailed && <Loader />}
        {!patchUserRequest && !patchUserFailed && (
          <Form name='profile' onSubmit={handleSubmit}>
            <InputContainer gap='mb-6'>
              <Input
                ref={ref}
                name='name'
                value={name}
                error={hasNameErr}
                errorText='???????????????????????? ?????????? ??????????'
                type='text'
                size='default'
                onBlur={validateName}
                onFocus={onNameFocus}
                icon={current === 'name' ? 'CloseIcon' : 'EditIcon'}
                placeholder='??????'
                onChange={(e) => onInputChange(e, user.name, setName)}
              />
            </InputContainer>
            <InputContainer gap='mb-6'>
              <Input
                ref={ref}
                name='login'
                value={email}
                type='text'
                errorText='???????????????????????? email'
                error={hasEmailErr}
                size='default'
                icon={current === 'email' ? 'CloseIcon' : 'EditIcon'}
                placeholder='??????????'
                onBlur={validateEmail}
                onFocus={onEmailFocus}
                onChange={(e) => onInputChange(e, user.email, setEmail)}
              />
            </InputContainer>
            <InputContainer gap='mb-6'>
              <Input
                ref={ref}
                name='password'
                value={password}
                error={hasPasswordErr}
                errorText='???????????? ?????????????? ????????????????'
                type='password'
                size='default'
                icon={current === 'password' ? 'CloseIcon' : 'EditIcon'}
                placeholder='????????????'
                onBlur={validatePassword}
                onFocus={onPasswordFocus}
                onChange={(e) => onInputChange(e, password, setPassword)}
              />
            </InputContainer>
            {isDataChanged && (
              <FormControls>
                <Button onClick={handleCancel} type='secondary' size='medium'>
                  ????????????
                </Button>
                <SubmitButton title='??????????????????' name='profile' />
              </FormControls>
            )}
          </Form>
        )}

        {!patchUserRequest && patchUserFailed && (
          <Notification
            heading='???? ?????????????? ???????????????? ????????????.'
            message={errMessage}
            onClose={resetError}
            canGoHome
          />
        )}
        {isUserChanged && (
          <Notification heading='???????????? ?????????????? ????????????????!' canGoHome onClose={resetError} />
        )}
      </section>
    </main>
  );
};

export default ProfilePage;
