import React from 'react';

import './Input.css';


const Input = ({ sendTranslation, setTranslation, setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value) && setTranslation(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button type="submit" className="sendButton" onClick={e => sendMessage(e) && sendTranslation(e)}>Send</button>
  </form>
)

export default Input;