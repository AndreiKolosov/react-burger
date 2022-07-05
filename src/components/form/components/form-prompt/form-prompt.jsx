import React from 'react';
import styles from './form-prompt.module.css';
import { Link } from 'react-router-dom';

const FormPrompt = ({ link, prompt, linkCaption, gap }) => {
  return (
    <p className={`${styles.prompt} ${gap} text text_type_main-default text_color_inactive`}>
      {prompt}
      <Link to={link} className={`${styles.prompt__link} text text_type_main-default`}>
        {linkCaption}
      </Link>
    </p>
  );
};

export default FormPrompt;
