import React from 'react';

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className="message-item">
          <h3>{message.topic}</h3>
          <p>{message.content}</p>
          <p>by {message.author}</p>
          <p>Posted on: {message.date.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
