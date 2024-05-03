import React, { createContext, useState, useContext } from 'react';

// export interface Message {
//   topic: string;
//   content: string;
//   author: string;
//   date: Date;
// }

const MessageContext = createContext({
  messages: [],
  addMessage: (message) => {}
});

export const MessageContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = newMessage => {
    setMessages(currentMessages => [...currentMessages, newMessage]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => useContext(MessageContext);

export default MessageContext;