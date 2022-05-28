import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientsNav = ({ tabs }) => {
  const [current, setCurrent] = React.useState(tabs[0].type);

  function handleScroll(type) {
    setCurrent(type);
    document.getElementById(type).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div style={{ display: 'flex' }}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          value={tab.type}
          active={current === tab.type}
          onClick={() => handleScroll(tab.type)}>
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
