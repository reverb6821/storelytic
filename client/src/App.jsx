import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import SignInPage from './views/SignInPage'
import SignUpPage from './views/SignUpPage'
import ProfilePage from './views/ProfilePage'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'
import Home from './views/Home';
import NotFound from './views/NotFound';

function App() {

  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {

  }, [currentUser]);

  return (
    <div className="App w-full bg-gray-50 dark:bg-gray-900" >
      <Router>
        <Navbar />
        <div className='mx-auto sm:px-4 mt-3'>
          <Routes>
            {currentUser ? (
              <>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/profile" element={<ProfilePage />} />
                <Route exact path="/add-product" element={<AddProduct />} />
                <Route exact path="/product/:id" element={<UpdateProduct />} />
                <Route path='*' element={<NotFound />} />
              </>
            ) : (
              <>
                <Route exact path="*" element={<SignInPage />} />
                <Route exact path="/sign-up" element={<SignUpPage />} />
              </>
            )}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
