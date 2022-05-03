import React from 'react';
import propTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientsNav = ({ tabs }) => {
  const [current, setCurrent] = React.useState(tabs[0]);
  return (
    <div style={{ display: 'flex' }}>
      {tabs.map((tab, index) => (
        <Tab key={index} value={tab.type} active={current === tab.type} onClick={setCurrent}>
          {tab.name}
        </Tab>
      ))}
    </div>
  );
};

IngredientsNav.propTypes = {
  tabs: propTypes.array.isRequired,
};

export default IngredientsNav;
