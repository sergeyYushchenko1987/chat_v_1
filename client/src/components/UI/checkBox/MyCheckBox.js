import React from 'react';
import classes from './MyCheckBox.module.css';

const MyCheckBox = ({ options, ...props }) => {
  return (
    <div>
      <div className={classes.myCheckBox}>
        {options.map((option) => (
          <label key={`l${option.id_user}`} className={classes.nameCheck}>
            <input
              key={`i${option.id_user}`}
              {...props}
              className={classes.checkBox}
              type="checkbox"
              id={option.id_user}
              name={option.name}
            />
            <span key={`s${option.id_user}`}>{option.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
export default MyCheckBox;
