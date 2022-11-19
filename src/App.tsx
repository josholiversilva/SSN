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

function App() {
  return (
    <>
      <div className='text-3xl font-bold h-screen w-full bg-[#121212]'>
        <Header />
        <div className="ml-4 mt-4 mr-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:user/wishlist" element={<Wishlist />} />
          <Route path="/groups/:group/:year" element={<Year />} />
          <Route path="/groups/:group/users" element={<Users />} />
          <Route path="/groups/:group/users/:user" element={<User />} />
        </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
