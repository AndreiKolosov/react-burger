import React, { FC } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IIngredientsNav } from './ingredients-nav.props';

const IngredientsNav: FC<IIngredientsNav> = ({ tabs, current, handleClick }) => {
  return (
    <div style={{ display: 'flex' }}>
      {tabs.map((tab, index) => (
        <Tab key={index} value={tab.type} active={current === tab.type} onClick={() => handleClick(tab.type)}>
          {tab.name}
        </Tab>
      ))}
    </div>
  );
};

export default IngredientsNav;
