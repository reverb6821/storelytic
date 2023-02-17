import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Auth from './views/Auth';
import SigninForm from './components/form/SigninForm';
import SignupForm from './components/form/SignupForm';

import Main from './views/Main'
import ProfilePage from './pages/ProfilePage';
import ProfileCard from './components/profile/ProfileCard';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';

function App() {

  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {

  }, [currentUser]);

  return (
    <div className="App">
      <Routes>
        {currentUser ? (
          <Route element={<Main />}>
            <Route path='/' element={<ProductsPage />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
        ) : (
          <Route element={<Auth />}>
            <Route path='/' element={<SigninForm />} />
            <Route path='/signup' element={<SignupForm />} />
          </Route>
        )}
      </Routes>
    </div>
  )
}

export default App
