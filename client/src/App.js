import React, { useState } from 'react';
import Chat from './components/Chat';
import './App.css';
import LoginForm from './components/LoginForm';
import RegistrationFrom from './components/RegistrationFrom';

function App() {
  const [registration, setRegistretion] = useState(true);
  const [authorization, setAuthorization] = useState(false);
  const [chat, setChat] = useState({ status: false, id: '', name: '' });

  const isRegistration = () => {
    setRegistretion(!registration);
    setAuthorization(!authorization);
  };
  const logIn = () => {
    setRegistretion(!registration);
    setAuthorization(!authorization);
  };

  const showChats = (id, name) => {
    setChat({ status: true, id: id, name: name });
    setAuthorization(!authorization);
  };

  return (
    <div className="App">
      {registration && (
        <RegistrationFrom logIn={logIn} isRegistration={isRegistration} />
      )}
      {authorization && <LoginForm showChats={showChats} />}
      {chat.status && <Chat id={chat.id} name={chat.name} />}
    </div>
  );
}

export default App;
