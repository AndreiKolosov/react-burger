import React, { FC } from 'react';
import styles from './home.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Loader from '../../components/loader/loader';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import Notification from '../../components/notification/notification';
import { IHomePage } from './home.props';
import { useAppSelector } from '../../services/store';

const HomePage: FC<IHomePage> = () => {
  const { ingredientsRequest, ingredientsFailed } = useAppSelector((store) => store.ingredients);
  const { registerSuccess, user } = useAppSelector((store) => store.user);
  const { orderFailed } = useAppSelector((store) => store.order);

  return (
    <div className={styles.home}>
      {ingredientsRequest && !ingredientsFailed && <Loader />}

      {!ingredientsFailed && !ingredientsRequest && (
        <main className={`${styles.home__content}`}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}

      {ingredientsFailed && orderFailed && (
        <Notification message="Сервер не ответил на запрос и не дал вам ингредиенты. Возможно вы ему не нравитесь..." />
      )}
      {registerSuccess && user && (
        <Notification heading="Поздравляем!" message={`${user.name}, Вы успешно зарегестрированы!`} />
      )}
    </div>
  );
};

export default HomePage;
