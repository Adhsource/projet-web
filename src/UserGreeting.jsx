// UserGreeting.jsx
import React from 'react';

function UserGreeting({user, onProfileClick }) {
  // Vérifie si user existe et contient '@'
  const username = user && user.includes('@') ? user.split('@')[0] : 'Invité';

  return (
    <div>
      Voir Mon Profil <button onClick={onProfileClick}>{username}</button>
    </div>
  );
}

export default UserGreeting;

