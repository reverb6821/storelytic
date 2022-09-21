import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom';

import { logout } from "../slices/auth";
import EventBus from "../common/EventBus";

import { Navbar } from 'flowbite-react';

const Header =()=>{

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

    return(
        <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        {showModeratorBoard && (
         
            <Link to={"/product"}>
              Product
            </Link>
  )}

          {showModeratorBoard && (
          <Navbar.Link to={"/mod"}>
            moderator
          </Navbar.Link>
          )}

          {showAdminBoard && (
          <Navbar.Link to={"/admin"}>
           Admin
          </Navbar.Link>
          )}

          {currentUser && (
          <Navbar.Link to={"/user"}>
            User
          </Navbar.Link>
           )}

           {currentUser ? (
            <div>
              <Navbar.Link to={"/profile"}>           
                  {currentUser.username}
              </Navbar.Link>
              <Navbar.Link onClick={logOut}>
                <p className="font-medium text-blue-600  hover:underline dark:text-blue-500">
                  Sign Out
                </p>
              </Navbar.Link>
            </div>
            
          ) : (
            <div>
            <Navbar.Link>
              <Link to={"/"}>
               Sign In
              </Link>
             
            </Navbar.Link>
            <Navbar.Link>
              <Link to={"/register"}>
                Sign Up
              </Link>
              
            </Navbar.Link>
          </div>
            )}
        </Navbar.Collapse>
      </Navbar>  
    )
}

export default Header