import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientsNav = ({ tabs, current, handleClick }) => {
  return (
    <div style={{ display: 'flex' }}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          value={tab.type}
          active={current === tab.type}
          onClick={() => handleClick(tab.type)}>
          {tab.name}
        </Tab>
      ))}
    </div>
  );
};

IngredientsNav.propTypes = {
  tabs: PropTypes.array.isRequired,
};

export default IngredientsNav;
