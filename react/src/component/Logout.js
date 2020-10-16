import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

function LogoutButton({ logout, history }) {
  const [logout, setLogout] = useState(null);
  const handleClick = () => {
    window.localStorage.removeItem('user');

    // logout();
    // history.push('/');
  }
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
      {logout && <Redirect to="/login" /> }
    </div>
  );
}

export default withRouter(LogoutButton);