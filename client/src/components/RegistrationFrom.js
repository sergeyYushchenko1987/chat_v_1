import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import PostServer from './API/PostServer';
import RequestError from './UI/errors/RequestError';

const RegistrationFrom = ({ isRegistration, logIn }) => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState({ status: false, error: '' });
  const create = (event) => {
    setError({ status: '', error: '' });
    event.preventDefault();
    const data = PostServer.registration(inputValue);
    data.then((result) => {
      if (result.data.status === 201) {
        setInputValue({
          name: '',
          email: '',
          password: '',
        });
        isRegistration();
      } else {
        setError({ status: true, error: result.data.description });
      }
    });
  };
  return (
    <div>
      <h1 className="headerRegistration">Registration form</h1>
      <form className="formRegistration">
        <MyInput
          value={inputValue.name}
          onChange={(e) =>
            setInputValue({ ...inputValue, name: e.target.value })
          }
          type="text"
          placeholder="name"
        />
        <MyInput
          value={inputValue.email}
          onChange={(e) =>
            setInputValue({ ...inputValue, email: e.target.value })
          }
          type="text"
          placeholder="email"
        />
        <MyInput
          value={inputValue.password}
          onChange={(e) =>
            setInputValue({ ...inputValue, password: e.target.value })
          }
          type="password"
          placeholder="password"
        />
        <MyButton onClick={create}>Submit</MyButton>
      </form>
      {error.status && <RequestError error={error.error}></RequestError>}
      <a
        className="linkRegistration"
        onClick={() => {
          logIn();
        }}
      >
        Log in
      </a>
    </div>
  );
};

export default RegistrationFrom;
