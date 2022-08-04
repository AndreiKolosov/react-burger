import React, { FC, useRef } from 'react';
import styles from './filling-element.module.css';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop, useDrag } from 'react-dnd';
import { reorderIngredient } from '../../../../services/actions/constructor';
import { useAppDispatch } from '../../../../services/store';
import { IFillingElement, IIngredient } from '../../../../utils/interfaces';

const FillingElement: FC<IFillingElement> = ({ item, deleteHandler, index }) => {
  const ref = useRef(null);
  const id = item.uId;
  const dispatch = useAppDispatch();

  const [{ handlerId }, drop] = useDrop({
    accept: 'filling',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: { index: number }) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      dispatch(reorderIngredient(dragIndex, hoverIndex));
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'filling',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <li
      className={`${styles.fillingElement} mb-4 pr-2`}
      ref={ref}
      data-handler-id={handlerId}
      style={{ opacity }}>
      <div className={`mr-2`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
        handleClose={() => deleteHandler(item)}
      />
    </li>
  );
};

export default FillingElement;
