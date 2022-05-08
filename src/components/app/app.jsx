import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import { order } from '../../utils/order';
import { apiConfig } from '../../utils/variables';
import { parseResponse } from '../../utils/utils';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';

function App() {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false);
  const [ingredient, setIngredient] = useState({});

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
    setIsIngredientDetailsOpened(true);
  };

  const handleOrderClick = () => {
    setIsOrderDetailsOpened(true);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = () => {
    fetch(`${apiConfig.baseUrl}/ingredients`, {
      headers: apiConfig.headers,
    })
      .then((res) => parseResponse(res))
      .then((res) => setIngredientsData(res.data))
      .catch((err) => {
        setIsloading(false);
        setHasError(true);
        console.log(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <div className={styles.app}>
      <AppHeader />

      <main className={`${styles.app__content}`}>
        {!isloading && !hasError && (
          <BurgerIngredients data={ingredientsData} onIngredientClick={handleIngredientClick} />
        )}
        <BurgerConstructor order={order} onOrderConfirmClick={handleOrderClick} />
      </main>

      {!isloading && hasError && (
        <Modal
          heading={'Что-то пошло не так... =('}
          handleKeydown={handleEscKeydown}
          closeModal={handleCloseClick}
        />
      )}
      {isOrderDetailsOpened && (
        <Modal handleKeydown={handleEscKeydown} closeModal={handleCloseClick}>
          <OrderDetails />
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
