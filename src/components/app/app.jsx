import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './app.module.css';
import { getIngredientsRequest } from '../../services/actions/ingredients';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import Loader from '../loader/loader';

function App() {
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false);
  const [ingredient, setIngredient] = useState({});
  const [orderNumber, setOrderNumber] = useState(null);
  const dispatch = useDispatch();

  const { ingredientsRequest, ingredientsFaild } = useSelector((store) => store.ingredientsReducer);

  const closeAllModals = () => {
    setIsIngredientDetailsOpened(false);
    setIsOrderDetailsOpened(false);
    // setHasError(false);
  };

  const handleEscKeydown = (e) => {
    e.key === 'Escape' && closeAllModals();
  };

  const handleCloseClick = (e) => {
    e.target && closeAllModals();
  };

  const handleIngredientClick = (item) => {
    setIngredient(item);
    dispatch({ type: 'ADD', payload: item }); // проверяю добавление ингредиентов в конструктор
    setIsIngredientDetailsOpened(true);
  };

  const handleOrderClick = () => {
    setOrderNumber(null);
    setIsOrderDetailsOpened(true);
    // postOrder(state.order, setOrderNumber, setIsLoading, setHasError); // post запрос на сервер
  };

  useEffect(() => {
    // getIngredients(setIngredientsData, setIsLoading, setHasError);
    dispatch(getIngredientsRequest());
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      {!ingredientsFaild && !ingredientsRequest && (
        <main className={`${styles.app__content}`}>
          <BurgerIngredients onIngredientClick={handleIngredientClick} />
          <BurgerConstructor onOrderConfirmClick={handleOrderClick} />
        </main>
      )}
      {ingredientsRequest && !ingredientsFaild && <Loader />}
      {ingredientsFaild && (
        <Modal
          heading={'Что-то пошло не так... =('}
          handleKeydown={handleEscKeydown}
          closeModal={handleCloseClick}
        />
      )}
      {isOrderDetailsOpened && (
        <Modal handleKeydown={handleEscKeydown} closeModal={handleCloseClick}>
          <OrderDetails orderNum={orderNumber} />
        </Modal>
      )}
      {isIngredientDetailsOpened && (
        <Modal
          heading={'Детали ингредиента'}
          handleKeydown={handleEscKeydown}
          closeModal={handleCloseClick}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </div>
  );
}

export default App;
