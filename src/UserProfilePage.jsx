import React from 'react';

function UserProfilePage({ user }) {
  return (
    <div className="user-profile-page">
      <div className="profile-banner">
        {/* Optionnel: Ajouter une image de bannière ici */}
      </div>
      <img src={user.photo} alt="Profile" className="profile-photo-large" />
      <h2>{user.name}</h2>
      <p>Joined: {new Date(user.joinedDate).toLocaleDateString()}</p>
      <div className="user-messages">
        {user.messages.map((message, index) => (
          <div key={index} className="message-item">
            <h3>{message.topic}</h3>
            <p>{message.content}</p>
            <p>Posted on: {new Date(message.date).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfilePage;
