import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import Logout from './Logout';
import SearchBar from './SearchBar';
import UserGreeting from './UserGreeting';
import ProfilePage from './ProfilePage'; // Assure-toi d'importer ProfilePage
import PollComponent from './PollComponent';
import PollCreator from './PollCreator';


function MainPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentUser, setCurrentUser] = useState({ email: '' });
  const [messages, setMessages] = useState([]);
  const [showProfile, setShowProfile] = useState(false); // Gérer l'affichage du profil
  const [pollData, setPollData] = useState(null);

  const handleLogin = (email, password) => {
    if (email.includes('@')) {
      console.log("Login attempt with:", email, password);
      setIsConnected(true);
      setCurrentUser({ email: email });
    } else {
      console.log("Invalid email format");
      // Gérer l'erreur d'email invalide ici, peut-être en définissant un état d'erreur
    }
  };

  const handleLogout = () => {
    setIsConnected(false);
    setCurrentUser({ email: '' });
    setShowProfile(false); // Réinitialiser lors de la déconnexion
  };

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  const toggleProfileView = () => {
    setShowProfile(!showProfile); // Basculer la vue du profil
  };

  const handleSavePoll = (poll) => {
    setPollData(poll);
  };

  if (!isConnected) {
    return (
      <div className="form-container">
        <Login onLogin={handleLogin} />
        <Signup />
      </div>
    );
  }

  if (showProfile) {
    return <ProfilePage currentUser={currentUser.email} onBackToMain={toggleProfileView} />;
  }
  

  return (
    <div className="messages-container">
      <UserGreeting user={currentUser.email} onProfileClick={toggleProfileView} />
      <h1>Welcome, {currentUser.email.split('@')[0]}</h1>
      {!pollData ? (
        <PollCreator onSave={handleSavePoll} />
      ) : (
        <PollComponent pollData={pollData} />
      )}
      <Logout onLogout={handleLogout} />
      <MessageForm addMessage={addMessage} />
      <MessageList messages={messages} />
      <SearchBar onSearch={() => {}} />
    </div>
  );
}

export default MainPage;
