import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({ options, defaultValue, change, value }) => {
  return (
    <select
      onChange={(e) => {
        change(e);
      }}
      value={value}
      className={classes.mySelect}
    >
      <option value="">{defaultValue}</option>
      {options.map((option) => {
        return (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
