import React from 'react';
import classes from './MyList.module.css';

const MyList = ({ messages }) => {
  return (
    <ul className={classes.myList}>
      {messages.length &&
        messages.map((message) => {
          return (
            <li key={`l${message.id_message}`} className={classes.item}>
              <div className={classes.date}>{message.date}</div>
              <div className={classes.time}>{message.time}</div>
              <div className={classes.body_message}>
                <span className={classes.author}>{message.name}</span>
                {message.message}
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default MyList;
