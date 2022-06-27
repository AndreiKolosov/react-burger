import React, { useState, useEffect } from 'react';
import styles from './profile.module.css';
import ProfileNav from '../../components/profile-nav/profile-nav';
import Form from '../../components/form/form';
import InputContainer from '../../components/form/components/input-container/input-container';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setName(user.name);
    }
  }, [user]);

  return (
    <main className={styles.content}>
      <aside className={styles.sidebar}>
        <ProfileNav />
      </aside>
      <section className={styles.profile}>
        <Form name='profile'>
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
          <InputContainer>
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
        </Form>
      </section>
    </main>
  );
};

export default ProfilePage;
