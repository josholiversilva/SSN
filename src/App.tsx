import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Groups from './routes/Groups';
import Group from './routes/groups/Group';
import Year from './routes/groups/group/Year';
import Home from './routes/Home';
import Users from './routes/Users';
import User from './routes/groups/group/users/User';
import Wishlist from './routes/groups/group/users/user/Wishlist';
import Header from './components/Header';
import Login from './routes/Login';
import Protected from './components/Protected';

function App() {
  const isLoggedIn = false;
  return (
    <>
      <div className='text-3xl font-bold h-screen w-full bg-[#121212]'>
        <Header />
        <div className="ml-4 mt-4 mr-4">
          { !isLoggedIn ? <Login /> :
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/groups/:group/:year" element={
              <Protected isLoggedIn={isLoggedIn}>
                <Year />
              </Protected>} />
            <Route path="/groups/:group/users" element={
              <Protected isLoggedIn={isLoggedIn}>
                <Users />
              </Protected>} />
            <Route path="groups/SSN/users/:user/wishlist" element={
              <Protected isLoggedIn={isLoggedIn}>
                <Wishlist />
              </Protected>} />
          </Routes>
          }
        </div>
      </div>
    </>
  );
}

export default App;
