import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import Logout from './Logout'; // Ne pas oublier d'importer le composant Logout

function MainPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [messages, setMessages] = useState([]);

  const handleLogin = (email, password) => {
    console.log("Login attempt with:", email, password);
    setIsConnected(true);
    setCurrentUser(email);
  };

  const handleSignup = (firstName, lastName, email, password) => {
    console.log("Signup attempt with:", firstName, lastName, email, password);
  };

  const handleLogout = () => {
    setIsConnected(false);
    setCurrentUser('');
  };

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  if (!isConnected) {
    return (
      <div className="form-container">
        <Login onLogin={handleLogin} />
        <Signup onSignup={handleSignup} />
      </div>
    );
  }

  return (
    <div className="messages-container">
      <h1>Welcome, {currentUser}</h1>
      <Logout onLogout={handleLogout} />
      <MessageForm addMessage={addMessage} />
      <MessageList messages={messages} />
    </div>
  );
}

export default MainPage;
