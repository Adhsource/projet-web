import React from 'react';

function Logout({ onLogout }) {
  return (
    <button className="logout-button" onClick={onLogout}>Logout</button>
  );
}

export default Logout;
