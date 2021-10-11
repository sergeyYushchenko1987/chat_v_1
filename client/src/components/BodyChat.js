import Sender from './Sender';
import MyList from './UI/list/MyList';

const BodyChat = ({ msg, msgSatus, chatId, sendMessage }) => {
  return (
    <div>
      <h1 className="chat-header" id={chatId.id}>
        {chatId.name}
      </h1>
      <div className="chat-body">
        <Sender send={sendMessage} />
        <div className="messages">
          {msgSatus && <MyList messages={msg}></MyList>}
        </div>
      </div>
    </div>
  );
};

export default BodyChat;
