import React from 'react';
import classes from './MyBotton.module.css';

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.myButton}>
      {children}
    </button>
  );
};

export default MyButton;
