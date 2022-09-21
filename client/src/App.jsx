import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {TbBuildingWarehouse} from 'react-icons/tb'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { logout } from "./slices/auth";
import EventBus from "./common/EventBus";

import { Navbar } from 'flowbite-react';
import FooterApp from './components/FooterApp';
import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile'
import Product from './views/Product';
import AddProduct from './views/AddProduct';
import UpdateProduct from './views/UpdateProduct';
import NotFound from './views/NotFound';

function App() {

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <div className="App">
      <Router>

        <Navbar
          fluid={true}
          rounded={true}
        >
          <Navbar.Brand>
            <TbBuildingWarehouse className="mr-3 h-6 sm:h-9 text-[30px] text-blue-600"/>

            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              StoreLytic
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>

            {showModeratorBoard && (
             
                <Link to={'/product'}>
                  Product
                </Link>
            )}

            {currentUser ? (
              <div>

                  <Link to={"/profile"}>
                    {currentUser.username}
                  </Link>

                <Navbar.Link onClick={logOut}>
                  <p className="font-medium text-blue-600  hover:underline dark:text-blue-500">
                    Sign Out
                  </p>
                </Navbar.Link>

              </div>

            ) : (
              <div>
                  <Link to={"/"}>
                    Sign In
                  </Link>

                  <Link to={"/register"}>
                    Sign Up
                  </Link>
              </div>
            )}
          </Navbar.Collapse>
        </Navbar>

        <div className='mx-auto sm:px-4 mt-3'>
       
            <Routes>
            {currentUser ? (
              <>
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/product" element={<Product />} />
                <Route exact path="/addproduct" element={<AddProduct />} />
                <Route exact path="/product/:id" element={<UpdateProduct />} />
                <Route path='*' element={<NotFound />} />
              </>
            ) : (
                <>
                  <Route exact path="*" element={<Login />} />
                  <Route exact path="/register" element={<Register />} />
                </>
              )}
              </Routes>
              
        </div>
        <FooterApp />
      </Router>
    </div>
  );
}

export default App;
