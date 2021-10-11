import React, { useEffect, useState } from 'react';
import SelectChat from './SelectChat';
import CreateChat from './CreateChat';
import Modal from './UI/modal/Modal';
import BodyChat from './BodyChat';
import PostServer from './API/PostServer';
import Welcome from './Welcome';
import { io } from 'socket.io-client';
const socket = io('http://localhost:4000');

const Chat = ({ id, name }) => {
  const [modal, setModal] = useState(false);
  const [chatId, setChatId] = useState({ id: '', name: '' });
  const [msgStatus, setMsgStatus] = useState(false);
  const [user, setUser] = useState({ id: id, name: name });
  const [showSelect, setShowSelect] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '',
      message: '',
      author: '',
      time: '',
      date: '',
    },
  ]);

  const addChat = () => {
    setModal(false);
    setShowSelect(true);
  };
  const createChat = () => {
    setModal(true);
  };
  const selectChat = (id, name) => {
    setChatId({ id: id, name: name });
    socket.emit('join', id);
  };

  useEffect(() => {
    socket.on('message', (msg) => {
      setMsgStatus(true);
      setMessages((prev) => {
        return [...prev, msg];
      });
    });
  }, []);
  useEffect(() => {
    const data = PostServer.getAllMessage(chatId.id);
    data.then((results) => {
      if (results.data.status === 204) {
        setMsgStatus(false);
        setMessages([
          {
            id: '',
            message: '',
            author: '',
            time: '',
            date: '',
          },
        ]);
      } else {
        setMsgStatus(true);
        setMessages(results.data);
      }
    });
  }, [chatId.id]);
  const sendMessage = (someText) => {
    socket.emit('message', { body: someText, user: user.id, room: chatId.id });
  };

  return (
    <div>
      <Welcome user={id} userName={name} />
      <SelectChat
        createChat={createChat}
        selectChat={selectChat}
        user={user.id}
        show={showSelect}
      />
      <Modal visible={modal} setVisible={setModal}>
        <CreateChat addChat={addChat} />
      </Modal>
      <BodyChat
        sendMessage={sendMessage}
        msg={messages}
        msgSatus={msgStatus}
        chatId={chatId}
      />
    </div>
  );
};

export default Chat;
