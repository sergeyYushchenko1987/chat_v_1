import React, { useEffect, useState } from 'react';
import MySelect from './UI/select/MySelect';
import MyButton from './UI/button/MyButton';
import PostServer from './API/PostServer';
import RequestError from './UI/errors/RequestError';

const SelectChat = ({ createChat, selectChat, user, show }) => {
  const [chooseChat, setChoseChat] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    const data = PostServer.getAllRooms(user);
    data.then((results) => {
      if (results.data.status === 204) {
        setChoseChat([]);
      } else {
        setChoseChat(results.data);
      }
    });
  }, [show]);
  const addChat = (e) => {
    e.preventDefault();
    createChat();
  };
  const chat = (e) => {
    setValue(e.target.value);
    selectChat(e.target.value, e.target.options[e.target.selectedIndex].text);
  };
  return (
    <div className="select_chat">
      <h1 className="headerRegistration">Select CHAT</h1>
      <form className="formRegistration">
        {chooseChat.length ? (
          <MySelect
            value={value}
            change={chat}
            defaultValue="Select chat"
            options={chooseChat}
          />
        ) : (
          <RequestError error={'Create new chat!'} />
        )}
        <div className="group-btn">
          <MyButton onClick={addChat}>Create chat</MyButton>
        </div>
      </form>
    </div>
  );
};

export default SelectChat;
