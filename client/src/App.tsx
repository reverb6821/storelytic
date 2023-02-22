import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import * as AuthService from "./services/auth.service";

import IUser from './interfaces/IUser';

import Login from './components/forms/Login';
import Register from './components/forms/Register';

import Main from './views/Main';
import Auth from './views/Auth';
import User from './views/pages/User'
import Profile from './views/pages/Profile';
import Products from './views/pages/Products';

function App() {

  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <div className="App">
       <Routes>
        {currentUser ? (
          <Route element={<Main />}>
            <Route path='/' element={<Products />} />
            <Route path='/users-manager' element={<User />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        ) : (
          <Route element={<Auth />}>
            <Route path='*' element={<Login />} />
            <Route path='/signup' element={<Register />} />
          </Route>
        )}
      </Routes>

    </div>
  )
}

export default App
