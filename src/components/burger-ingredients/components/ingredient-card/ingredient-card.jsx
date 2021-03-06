import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './ingredient-card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';

const IngredientCard = ({ item }) => {
  const location = useLocation();

  const { bun, filling } = useSelector((store) => store.burgerConstructor);

  const counter = useMemo(() => {
    if (item.type === 'bun') {
      return bun && item._id === bun._id ? 1 : null;
    }
    return filling && filling.filter((fillingItem) => fillingItem._id === item._id).length;
  }, [bun, filling, item._id, item.type]);

  const [{ isDrag }, dragRef] = useDrag(
    {
      type: 'ingredient',
      item: { item },
      collect: (monitor) => ({
        isDrag: monitor.isDragging(),
      }),
    },
    [bun, filling]
  );
  return (
    <Link
      className={styles.link}
      to={{
        pathname: `/ingredients/${item._id}`,
        state: { background: location },
      }}>
      <div className={`${styles.card} pl-4 pr-4`} ref={dragRef} draggable>
        {counter > 0 && <Counter count={counter} size='default' />}
        <img
          className={isDrag ? `${styles.cardIsDragging}` : null}
          src={item.image}
          alt={item.name}
        />
        <p className={`text text_type_digits-default mt-1 mb-1`}>
          {item.price} <CurrencyIcon />
        </p>
        <h3 className={`text text_type_main-default`}>{item.name}</h3>
      </div>
    </Link>
  );
};

IngredientCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default IngredientCard;
