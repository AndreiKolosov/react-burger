import React, { useState, useEffect, useCallback, useRef, FC, ChangeEvent } from 'react';
import styles from './profile.module.css';
import ProfileNav from '../../components/profile-nav/profile-nav';
import Form from '../../components/form/form';
import InputContainer from '../../components/form/components/input-container/input-container';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import FormControls from '../../components/form/components/form-controls/form-controls';
import SubmitButton from '../../components/form/components/submit-btn/submit-btn';
import { patchUser, resetPatchUserErr } from '../../services/actions/user';
import { emailRegExp } from '../../utils/validate';
import Loader from '../../components/loader/loader';
import Notification from '../../components/notification/notification';
import { getCookie } from '../../utils/cookie';
import { IProfile } from './profile.props';
import { useAppDispatch, useAppSelector } from '../../services/store';

const ProfilePage: FC<IProfile> = () => {
  const [isDataChanged, setIsDataChanged] = useState(false);
  const [current, setCurrent] = useState('');
  const [name, setName] = useState('');
  const [hasNameErr, setHasNameErr] = useState(false);
  const [email, setEmail] = useState('');
  const [hasEmailErr, setHasEmailErr] = useState(false);
  const [password, setPassword] = useState('');
  const [hasPasswordErr, setHasPasswordErr] = useState(false);
  const ref = useRef(null);
  const { user, patchUserRequest, patchUserFailed, isUserChanged, errMessage } = useAppSelector((store) => store.user);
  const accessToken = getCookie('accessToken');

  const dispatch = useAppDispatch();

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

  const onNameFocus = () => {
    setHasNameErr(false);
    setCurrent('name');
  };

  const onPasswordFocus = () => {
    setHasPasswordErr(false);
    setCurrent('password');
  };

  const validateEmail = useCallback(() => {
    email && setHasEmailErr(!emailRegExp.test(email));
    setCurrent('');
  }, [email]);

  const validateName = useCallback(() => {
    (name.length > 20 || name.length < 3) && setHasNameErr(true);
    setCurrent('');
  }, [name]);

  const validatePassword = () => {
    password && password.length < 5 && setHasPasswordErr(true);
    setCurrent('');
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>, dataValue: string, setNewValue: (a: string) => void) => {
    const newValue = e?.target?.value;
    setNewValue(newValue);
    newValue === dataValue ? setIsDataChanged(false) : setIsDataChanged(true);
  };

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
      user && setEmail(user.email);
      user && setName(user.name);
      setPassword('');
      setHasEmailErr(false);
      setHasNameErr(false);
      setHasPasswordErr(false);
      setIsDataChanged(false);
    },
    [user]
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
          <Form name="profile" onSubmit={handleSubmit}>
            <InputContainer gap="mb-6">
              <Input
                ref={ref}
                name="name"
                value={name}
                error={hasNameErr}
                errorText="Недопустимая длина имени"
                type="text"
                size="default"
                onBlur={validateName}
                onFocus={onNameFocus}
                icon={current === 'name' ? 'CloseIcon' : 'EditIcon'}
                placeholder="Имя"
                onChange={(e) => user && onInputChange(e, user.name, setName)}
              />
            </InputContainer>
            <InputContainer gap="mb-6">
              <Input
                ref={ref}
                name="login"
                value={email}
                type="text"
                errorText="Некорректный email"
                error={hasEmailErr}
                size="default"
                icon={current === 'email' ? 'CloseIcon' : 'EditIcon'}
                placeholder="Логин"
                onBlur={validateEmail}
                onFocus={onEmailFocus}
                onChange={(e) => user && onInputChange(e, user.email, setEmail)}
              />
            </InputContainer>
            <InputContainer gap="mb-6">
              <Input
                ref={ref}
                name="password"
                value={password}
                error={hasPasswordErr}
                errorText="Пароль слишком короткий"
                type="password"
                size="default"
                icon={current === 'password' ? 'CloseIcon' : 'EditIcon'}
                placeholder="Пароль"
                onBlur={validatePassword}
                onFocus={onPasswordFocus}
                onChange={(e) => onInputChange(e, password, setPassword)}
              />
            </InputContainer>
            {isDataChanged && (
              <FormControls>
                <Button onClick={handleCancel} type="secondary" size="medium">
                  Отмена
                </Button>
                <SubmitButton title="Сохранить" name="profile" />
              </FormControls>
            )}
          </Form>
        )}

        {!patchUserRequest && patchUserFailed && (
          <Notification heading="Не удалось обновить данные." message={errMessage} onClose={resetError} canGoHome />
        )}
        {isUserChanged && <Notification heading="Данные успешно изменены!" canGoHome onClose={resetError} />}
      </section>
    </main>
  );
};

export default ProfilePage;
