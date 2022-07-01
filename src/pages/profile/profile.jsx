import React, { useState, useEffect, useCallback } from 'react';
import styles from './profile.module.css';
import ProfileNav from '../../components/profile-nav/profile-nav';
import Form from '../../components/form/form';
import InputContainer from '../../components/form/components/input-container/input-container';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import FormControls from '../../components/form/components/form-controls/form-controls';
import SubmitButton from '../../components/form/components/submit-btn/submit-btn';
import { getUser, patchUser } from '../../services/actions/user';

const ProfilePage = () => {
  const [isBtnsVisible, setIsBtnsVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, patchUserRequest } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    setEmail(user.email);
    setName(user.name);
  }, [dispatch]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(patchUserRequest);
      dispatch(patchUser(name, email, password));
    },
    [dispatch, name, email, password]
  );

  const handleCancel = useCallback(
    (e) => {
      e.preventDefault();
      setEmail(user.email);
      setName(user.name);
      setPassword('');
    },
    [user]
  );

  return (
    <main className={styles.content}>
      <aside className={styles.sidebar}>
        <ProfileNav />
      </aside>
      <section className={styles.profile}>
        <Form name='profile' onSubmit={handleSubmit}>
          <InputContainer gap='mb-6'>
            <Input
              name='name'
              value={name}
              type='text'
              size='default'
              icon='EditIcon'
              placeholder='Имя'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer gap='mb-6'>
            <Input
              name='login'
              value={email}
              type='email'
              size='default'
              icon='EditIcon'
              placeholder='Логин'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer gap='mb-6'>
            <Input
              name='password'
              value={password}
              type='password'
              size='default'
              icon='EditIcon'
              placeholder='Пароль'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputContainer>
          <FormControls>
            <Button onClick={handleCancel} type='secondary' size='medium'>
              Отмена
            </Button>
            <SubmitButton title='Сохранить' name='profile' />
          </FormControls>
        </Form>
      </section>
    </main>
  );
};

export default ProfilePage;
