import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const Sender = ({ send }) => {
  const [value, setValue] = useState('');
  return (
    <div className="group-send">
      <MyInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div className="btn-send">
        <MyButton
          onClick={() => {
            send(value);
            setValue('');
          }}
        >
          Send
        </MyButton>
      </div>
    </div>
  );
};

export default Sender;
