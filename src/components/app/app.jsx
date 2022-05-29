import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './app.module.css';
import {
  getIngredientsRequest,
  RESET_INGREDIENTS_ERROR_STATUS,
} from '../../services/actions/ingredients';
import { RESET_ORDER_ERROR_STATUS } from '../../services/actions/order';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import Loader from '../loader/loader';

function App() {
  const { ingredientsRequest, ingredientsFaild } = useSelector((store) => store.ingredients);
  const { orderFaild } = useSelector((store) => store.order);

  const dispatch = useDispatch();

  const resetErorrs = () => {
    dispatch({ type: RESET_INGREDIENTS_ERROR_STATUS });
    dispatch({ type: RESET_ORDER_ERROR_STATUS });
  };

  useEffect(() => {
    dispatch(getIngredientsRequest());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />

      {ingredientsRequest && !ingredientsFaild && <Loader />}

      {!ingredientsFaild && !ingredientsRequest && (
        <main className={`${styles.app__content}`}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      )}

      {ingredientsFaild && orderFaild && (
        <Modal heading={'Что-то пошло не так... =('} closeModal={resetErorrs} />
      )}
    </div>
  );
}

export default App;
