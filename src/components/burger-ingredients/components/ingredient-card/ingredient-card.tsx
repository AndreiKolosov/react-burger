import React, { FC, useMemo } from 'react';
import styles from './ingredient-card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import { IIngredientCard } from './ingredient-card.props';
import { useAppSelector } from '../../../../services/store';

const IngredientCard: FC<IIngredientCard> = ({ item }) => {
  const location = useLocation();

  const { bun, filling } = useAppSelector((store) => store.burgerConstructor);

  const counter = useMemo(() => {
    if (item.type === 'bun') {
      return bun && item._id === bun._id ? 1 : 0;
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
        {counter > 0 && <Counter count={counter} size="default" />}
        <img className={isDrag ? `${styles.cardIsDragging}` : ''} src={item.image} alt={item.name} />
        <p className={`text text_type_digits-default mt-1 mb-1`}>
          {item.price} <CurrencyIcon type="primary" />
        </p>
        <h3 className={`text text_type_main-default`}>{item.name}</h3>
      </div>
    </Link>
  );
};

export default IngredientCard;
