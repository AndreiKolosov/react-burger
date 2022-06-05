import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './app.module.css';
import { getIngredients, resetIngredientsError } from '../../services/actions/ingredients';
import { resetOrderError } from '../../services/actions/order';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import Loader from '../loader/loader';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function App() {
  const { ingredientsRequest, ingredientsFailed } = useSelector((store) => store.ingredients);
  const { orderFailed } = useSelector((store) => store.order);

  const dispatch = useDispatch();

  const resetErorrs = () => {
    dispatch(resetIngredientsError());
    dispatch(resetOrderError());
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />

      {ingredientsRequest && !ingredientsFailed && <Loader />}

      {!ingredientsFailed && !ingredientsRequest && (
        <main className={`${styles.app__content}`}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}

      {ingredientsFailed && orderFailed && (
        <Modal heading={'Что-то пошло не так... =('} closeModal={resetErorrs} />
      )}
    </div>
  );
}

export default App;
