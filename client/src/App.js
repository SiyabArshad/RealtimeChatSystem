import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Routing from './routing/Routing';
import setAuthToken from './utils/setAuthToken';
import Drawer from './components/Drawer/Drawer';
const App = () => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    if (localStorage?.token) {
      const jwt = localStorage.getItem('token');
      const clinetdata=jwtDecode(jwt)
      setAuthToken(jwt,clinetdata);
      setUser(jwtDecode(jwt));
    }
    
  }, []);
  return (
    <Router>
          <Routing user={user} />
    </Router>
  );
};

export default App;
