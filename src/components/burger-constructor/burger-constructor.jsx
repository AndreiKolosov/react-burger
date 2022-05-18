import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientType, ariaLables } from '../../utils/variables';
// import { sortItems } from '../../utils/utils';
// import { ingridientPropType } from '../../utils/prop-types';
import { ConstructorContext } from '../../services/constructorContext';

const BurgerConstructor = ({ onOrderConfirmClick }) => {
  const [constructorState, constructorStateDispathcer] = useContext(ConstructorContext);
  console.log(constructorState);
  // const bun = sortItems(IngredientType.Bun.type, constructorState.ingredients);
  const filling = constructorState.ingredients.filter(
    (ingredient) => ingredient.type !== IngredientType.Bun.type
  );

  // const price = filling.reduce((summ, item) => summ + item.price, bun.price * 2);

  return (
    <section className={`${styles.container} pt-25 pl-4`} aria-label={ariaLables.constructor}>
      <ul className={`${styles.ingredientList}`}>
        {constructorState.bun && (
          <li className={`${styles.ingredienItem} ml-4`}>
            <ConstructorElement
              type='top'
              isLocked={true}
              text={`${constructorState.bun.name} (верх)`}
              price={constructorState.bun.price}
              thumbnail={constructorState.bun.image_mobile}
            />
          </li>
        )}

        <li className={`${styles.ingredienItem}`}>
          <ul className={`${styles.fillingList} mt-4 mb-4`}>
            {filling.map((item) => {
              return (
                <li key={item._id} className={`${styles.fillingItem} mb-4 pr-2`}>
                  <div className={`mr-2`}>
                    <DragIcon />
                  </div>
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image_mobile}
                    handleClose={() =>
                      constructorStateDispathcer({ type: 'DELETE', payload: item })
                    }
                  />
                </li>
              );
            })}
          </ul>
        </li>
        {constructorState.bun && (
          <li className={`${styles.ingredienItem} ml-4`}>
            <ConstructorElement
              type='bottom'
              isLocked={true}
              text={`${constructorState.bun.name} (низ)`}
              price={constructorState.bun.price}
              thumbnail={constructorState.bun.image_mobile}
            />
          </li>
        )}
      </ul>
      <div className={`${styles.order} mt-10`}>
        <span className='text text_type_digits-medium mr-10'>
          {constructorState.totalPrice} <CurrencyIcon />
        </span>
        <Button type='primary' size='medium' onClick={onOrderConfirmClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  onOrderConfirmClick: PropTypes.func.isRequired,
};

export default BurgerConstructor;
