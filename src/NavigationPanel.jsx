import React from 'react';
import Login from './Login';
import Logout from './Logout';

function NavigationPanel({ login, logout, isConnected }) {
  return (
    <nav>
      {isConnected ? <Logout logout={logout} /> : <Login login={login} />}
    </nav>
  );
}

export default NavigationPanel;
