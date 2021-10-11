import React from 'react';

const Welcome = ({ user, userName }) => {
  return (
    <div className="welcome">
      <h1 id={user}>{`Hello, ${userName}`}</h1>
    </div>
  );
};

export default Welcome;
