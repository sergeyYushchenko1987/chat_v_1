import React from 'react';
import classes from './RequstError.module.css';

const RequestError = ({ error }) => {
  return <div className={classes.myError}>{error}</div>;
};

export default RequestError;
