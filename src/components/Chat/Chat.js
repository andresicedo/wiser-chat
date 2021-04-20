import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import './Chat.css';
import Translator from '../Translation/Translator';

// const ENDPOINT = 'https://wiser-chat.herokuapp.com/';
const ENDPOINT = process.env.REACT_APP_ENDPOINT || 'http://localhost:5000';
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);


    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  

  return (
    <div className="row">
    <div className="outerContainer">
      <div className="leftContainer col-3 col-s-3 menu">
      <TextContainer users={users}/>
      </div>
      <div className="container col-6 col-s-9 ">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <div className="rightContainer col-3 col-s-12">
        <div className="aside">
          <Translator messages={messages}/>
        </div>
      
      </div>
    </div>
    </div>
  );
}

export default Chat;
