import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './routes/Home';
import Users from './routes/Users';
import User from './routes/User';
import Wishlist from './routes/user/Wishlist';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/:user" element={<User />} />
          <Route path="/user/wishlist" element={<Wishlist />} />
        </Routes>
    </>
  );
}

export default App;
