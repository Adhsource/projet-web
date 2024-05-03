import React, { useState } from 'react';

function MessageForm({ addMessage }) {
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      topic,
      content,
      author: "Current User",
      date: new Date()
    };
    addMessage(newMessage);
    setTopic('');
    setContent('');
  };

  return (
    <div className="message-form">
      <form onSubmit={handleSubmit}>
        <label>
          Topic:
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} required />
        </label>
        <label>
          Message:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </label>
        <button type="submit">Post Message</button>
      </form>
    </div>
  );
}

export default MessageForm;