import React, {useState} from 'react';
import { withRouter, Redirect } from 'react-router-dom';

function LogoutButton({}) {
  const [logout, setLogout] = useState(null);
  const handleClick = () => {
    window.localStorage.removeItem('user');

    setLogout(1);

    // logout();
    // history.push('/');
  }
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
      {logout && <Redirect to="/signup" /> }
    </div>
  );
}

export default withRouter(LogoutButton);