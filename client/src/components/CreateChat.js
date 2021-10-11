import React, { useEffect, useState } from 'react';
import MyCheckBox from './UI/checkBox/MyCheckBox';
import MyButton from './UI/button/MyButton';
import PostServer from './API/PostServer';

const CreateChat = ({ addChat }) => {
  const [checkStatus, setCheckStatus] = useState([]);
  const [users, setUsers] = useState([{ data: { id_user: '', name: '' } }]);
  useEffect(() => {
    const data = PostServer.getAllUsers();
    data.then((result) => {
      if (result.data.length) {
        setUsers(result.data);
      }
    });
  }, []);

  function checkFunction(e) {
    if (e.target.checked && !checkStatus.some((el) => el.id === e.target.id)) {
      setCheckStatus([
        ...checkStatus,
        { id: e.target.id, name: e.target.name },
      ]);
    } else if (!e.target.checked) {
      setCheckStatus(checkStatus.filter((el) => e.target.id !== el.id));
    }
  }
  const send = (e) => {
    e.preventDefault();
    const data = PostServer.createRooms(checkStatus);
    data.then((results) => {});
    addChat();
  };
  return (
    <div>
      <h1 className="headerRegistration">Add users:</h1>
      <form>
        <MyCheckBox
          checked={checkStatus.status}
          onChange={checkFunction}
          options={users}
        />
        <MyButton onClick={send}>Create</MyButton>
      </form>
    </div>
  );
};

export default CreateChat;
