import React, { useEffect } from 'react';
import styles from './home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Loader from '../../components/loader/loader';
import Modal from '../../components/modal/modal';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import AppHeader from '../../components/app-header/app-header';
import { resetOrderError } from '../../services/actions/order';
import { getIngredients, resetIngredientsError } from '../../services/actions/ingredients';

const HomePage = () => {
  const { ingredientsRequest, ingredientsFailed } = useSelector((store) => store.ingredients);
  const { orderFailed } = useSelector((store) => store.order);

  const dispatch = useDispatch();

  const resetErrors = () => {
    dispatch(resetIngredientsError());
    dispatch(resetOrderError());
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

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
        <Modal heading={'Что-то пошло не так... =('} closeModal={resetErrors} />
      )}
    </div>
  );
};

export default HomePage;
