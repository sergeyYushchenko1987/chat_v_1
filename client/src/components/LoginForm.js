import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import PostServer from './API/PostServer';
import RequestError from './UI/errors/RequestError';

const LoginForm = ({ showChats }) => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({ status: false, error: '' });

  const logIn = (event) => {
    setError({ status: false, error: '' });
    event.preventDefault();
    const data = PostServer.authorization(inputValue);
    data.then((result) => {
      if (result.data.status === 301) {
        showChats(result.data.user, result.data.name);
      } else {
        setError({ status: true, error: result.data.description });
      }
    });
    setInputValue({
      email: '',
      password: '',
    });
  };
  return (
    <div>
      <h1 className="headerRegistration">Enter for chatting</h1>
      <form>
        <MyInput
          type="text"
          value={inputValue.email}
          onChange={(e) =>
            setInputValue({ ...inputValue, email: e.target.value })
          }
          placeholder="email"
        />
        <MyInput
          type="password"
          value={inputValue.password}
          onChange={(e) =>
            setInputValue({ ...inputValue, password: e.target.value })
          }
          placeholder="password"
        />
        <MyButton onClick={logIn}>Entry for chat</MyButton>
      </form>
      {error.status && <RequestError error={error.error}></RequestError>}
    </div>
  );
};

export default LoginForm;
