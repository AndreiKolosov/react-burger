import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './app.module.css';
import { getIngredientsRequest } from '../../services/actions/ingredients';
import { openDetails } from '../../services/actions/ingredient';
import { postOrderRequest } from '../../services/actions/order';
import { SET_INGREDIENT_DETAILS_CLOSED } from '../../services/actions/ingredient';
import { SET_ORDER_DETAILS_CLOSED } from '../../services/actions/order';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import Loader from '../loader/loader';

function App() {
  const { ingredientsRequest, ingredientsFaild } = useSelector((store) => store.ingredients);
  const { order } = useSelector((store) => store.burgerConstructor);
  const { ingredient, isIngredientDetailsOpened } = useSelector((store) => store.ingredient);
  const { orderRequest, orderFaild, isOrderDetailsOpened } = useSelector((store) => store.order);
  const dispatch = useDispatch();

  const closeAllModals = () => {
    dispatch({ type: SET_INGREDIENT_DETAILS_CLOSED });
    dispatch({ type: SET_ORDER_DETAILS_CLOSED });
  };

  const handleEscKeydown = (e) => {
    e.key === 'Escape' && closeAllModals();
  };

  const handleCloseClick = (e) => {
    e.target && closeAllModals();
  };

  const handleIngredientClick = (item) => {
    dispatch({ type: 'ADD', payload: item }); // проверяю добавление ингредиентов в конструктор
    dispatch(openDetails(item));
  };

  const handleOrderClick = () => {
    dispatch(postOrderRequest(order));
  };

  useEffect(() => {
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
      {ingredientsFaild && orderFaild && (
        <Modal
          heading={'Что-то пошло не так... =('}
          handleKeydown={handleEscKeydown}
          closeModal={handleCloseClick}
        />
      )}
      {isOrderDetailsOpened && (
        <Modal handleKeydown={handleEscKeydown} closeModal={handleCloseClick}>
          {orderRequest && !orderFaild && <Loader />}
          {!orderRequest && !orderFaild && <OrderDetails />}
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
