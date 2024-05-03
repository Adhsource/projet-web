import React from 'react';

function ProfilePage({ currentUser, onBackToMain }) {
  return (
    <div>
      <h1>Profile de {currentUser}</h1>
      <button onClick={onBackToMain}>Retour</button>
      {/* Afficher plus d'informations de profil ici */}
    </div>
  );
}

export default ProfilePage;
