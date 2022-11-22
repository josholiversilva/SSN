import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Groups from './routes/Groups';
import Group from './routes/groups/Group';
import Year from './routes/groups/group/Year';
import Home from './routes/Home';
import Users from './components/Users';
import User from './routes/groups/group/users/User';
import UserComponent from './components/User';
import Wishlist from './routes/groups/group/users/user/Wishlist';
import Header from './components/Header';
import Login from './routes/Login';
import Protected from './components/Protected';
import Profile from './routes/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn") || "false")
    // true
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn))
  }, [isLoggedIn])

  const handleLogin = (data: any) => {
    if (data === "") {
      localStorage.removeItem("user")
      localStorage.removeItem("email")
    } else {
      localStorage.setItem("user", data.name)
      localStorage.setItem("email", data.email)
    }
    setIsLoggedIn(data !== "")
  };

  return (
    <>
      <div className='text-3xl font-bold h-screen w-full bg-[#121212]'>
        <Header user={localStorage.getItem("user") || ""} />
        <div className="ml-4 mt-4 mr-4">
          { !isLoggedIn ? <Login handleLogin={handleLogin} /> :
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route path="/:profile" element={
              <Protected isLoggedIn={isLoggedIn}>
                <Profile /> 
              </Protected>} />
            <Route path="/groups/:group/:year" element={
              <Protected isLoggedIn={isLoggedIn}>
                <Year />
              </Protected>} />
            <Route path="groups/SSN/:year/:user/wishlist" element={
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
