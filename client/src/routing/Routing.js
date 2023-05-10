import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Chat from '../pages/chat';
import Profile from '../components/profile/Profile';
import Logout from '../pages/logout/Logout';
import Home from '../pages/home/Home';
import Settings from '../pages/settings/Settings';
import CreateContact from "../pages/contact/CreateContact"
import PrivateRoute from './PrivateRoute';

import Drawer from '../components/Drawer/Drawer';
const Routing = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout user={user}><Home /></Layout>} />
   <Route path="/profile" element={user?<Layout user={user}><Profile user={user}/></Layout>:<Login/>} />
   <Route path="/addcontact" element={user?<Layout user={user}><CreateContact user={user}/></Layout>:<Login/>} />
   <Route path="/chat" element={user?<Layout user={user}><Chat user={user}/></Layout>:<Login/>} />
   <Route path="/chat/:id" element={user?<Layout user={user}><Chat user={user}/></Layout>:<Login/>} />
   <Route path="/settings" element={user?<Layout user={user}> <Settings /> </Layout>:<Login/> } />
   <Route path="/logout" element={<Layout user={user}> <Logout /> </Layout>} />
   <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/>} />
    </Routes>
  );
};

export default Routing;

const Layout = ({ children,user }) => {
  return (
    <div className='maincon'>
      <Drawer user={user} />
      {children}
    </div>
  );
};