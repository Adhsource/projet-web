import React from 'react';

function MessageItem({ message }) {
  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <h3>{message.topic}</h3>
      <p>{message.content}</p>
      <p>by {message.author}</p>
      <p>Posted on: {message.date.toLocaleString()}</p>
    </div>
  );
}

export default MessageItem;
