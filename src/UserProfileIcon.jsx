import React from 'react';
import { useHistory } from 'react-router-dom'; // Utilisez react-router pour la navigation

function UserProfileIcon({ user }) {
  const history = useHistory();

  const goToProfile = () => {
    history.push('/profile');
  };

  return (
    <div className="user-profile-icon" onClick={goToProfile}>
      <img src={user.photo} alt="User" className="user-photo" />
      <p className="user-name">{user.name}</p>
    </div>
  );
}

export default UserProfileIcon;
