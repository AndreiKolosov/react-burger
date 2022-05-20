import React, { useState, useEffect, useReducer } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
// import { order } from '../../utils/order';
import { getIngredients, postOrder } from '../../utils/api';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import { ConstructorContext } from '../../services/constructorContext';

const constructorInitialState = {
  bun: null,
  ingredients: [],
  order: [],
  totalPrice: 0,
};
function constructroReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      if (action.payload.type === 'bun') {
        return {
          ...state,
          bun: action.payload,
          order: [...state.order, action.payload._id],
          totalPrice: state.totalPrice + action.payload.price * 2,
        };
      }
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
        order: [...state.order, action.payload._id],
        totalPrice: state.totalPrice + action.payload.price,
      };

    case 'DELETE':
      return {
        ...state,
        ingredients: state.ingredients.filter((item) => item._id !== action.payload._id),
        order: state.order.filter((id) => id !== action.payload._id),
        totalPrice: state.totalPrice - action.payload.price,
      };

    case 'RESET':
      return constructorInitialState;

    default:
      return state;
  }
}

function App() {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false);
  const [ingredient, setIngredient] = useState({});
  const [orderNumber, setOrderNumber] = useState(null);
  const constructorState = useReducer(constructroReducer, constructorInitialState);
  const [state, dispatcher] = constructorState; // достал стейт и диспатчер для проверки функциональности

  const closeAllModals = () => {
    setIsIngredientDetailsOpened(false);
    setIsOrderDetailsOpened(false);
    setHasError(false);
  };

  const handleEscKeydown = (e) => {
    e.key === 'Escape' && closeAllModals();
  };

  const handleCloseClick = (e) => {
    e.target && closeAllModals();
  };

  const handleIngredientClick = (item) => {
    setIngredient(item);
    dispatcher({ type: 'ADD', payload: item }); // проверяю добавление ингредиентов в конструктор
    setIsIngredientDetailsOpened(true);
  };

  const handleOrderClick = () => {
    setOrderNumber(null);
    setIsOrderDetailsOpened(true);
    postOrder(state.order, setOrderNumber, setIsLoading, setHasError); // post запрос на сервер
  };

  useEffect(() => {
    getIngredients(setIngredientsData, setIsLoading, setHasError);
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      {!isLoading && !hasError && (
        <main className={`${styles.app__content}`}>
          <BurgerIngredients data={ingredientsData} onIngredientClick={handleIngredientClick} />
          <ConstructorContext.Provider value={constructorState}>
            <BurgerConstructor onOrderConfirmClick={handleOrderClick} />
          </ConstructorContext.Provider>
          {isLoading && !hasError && <p className='text text_type_main-large pt-10'>Загрузка...</p>}
        </main>
      )}

      {!isLoading && hasError && (
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
