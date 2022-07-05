import React, { useEffect } from 'react';
import styles from './home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Loader from '../../components/loader/loader';
import Modal from '../../components/modal/modal';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import { resetOrderError } from '../../services/actions/order';
import { resetIngredientsError } from '../../services/actions/ingredients';
import Notification from '../../components/notification/notification';

const HomePage = () => {
  const { ingredientsRequest, ingredientsFailed } = useSelector((store) => store.ingredients);
  const { registerSuccess, user } = useSelector((store) => store.user);
  const { orderFailed } = useSelector((store) => store.order);

  const dispatch = useDispatch();

  const resetErrors = () => {
    dispatch(resetIngredientsError());
    dispatch(resetOrderError());
  };

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
        <Notification message='Сервер не ответил на запрос и не дал вам ингредиенты. Возможно вы ему не нравитесь...' />
      )}
      {registerSuccess && (
        <Notification
          heading='Поздравляем!'
          message={`${user.name}, Вы успешно зарегестрированы!`}
        />
      )}
    </div>
  );
};

export default HomePage;
