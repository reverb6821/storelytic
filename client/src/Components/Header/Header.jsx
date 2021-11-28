import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as NavLink, Link } from 'react-router-dom';
import { createPopper } from "@popperjs/core";

import { logout } from '../../slices/auth';
import AuthVerify from "../../common/AuthVerify";
import EventBus from '../../common/eventBus';

const Header = () => {

   // dropdown props
   const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
   const btnDropdownRef = React.createRef();
   const popoverDropdownRef = React.createRef();
   const openDropdownPopover = () => {
       createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
           placement: "bottom-start",
       });
       setDropdownPopoverShow(true);
   };
   const closeDropdownPopover = () => {
       setDropdownPopoverShow(false);
   };


   const [show, setShow] = useState(false);
   const [delivery, setDelivery] = useState(false);
   const [stock, setStock] = useState(false);
   const [profile, setProfile] = useState(false);
   const [showModeratorBoard, setShowModeratorBoard] = useState(false);
   const [showAdminBoard, setShowAdminBoard] = useState(false);

   const { user: currentUser } = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const logOut = () => {
       dispatch(logout());
   };
   useEffect(() => {
       if (currentUser) {
           setShowModeratorBoard(currentUser.roles.includes('ROLE_MODERATOR'));
           setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'));
       } else {
           setShowModeratorBoard(false);
           setShowAdminBoard(false);
       }
       EventBus.on('logout', () => {
        logOut();
      });
  
      return () => {
        EventBus.remove('logout');
      };
   }, [currentUser, logOut]);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          {/**  User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            {/** Dropdown */}
            <div>

              <a
                className="text-blueGray-500 block"
                href="#pablo"
                ref={btnDropdownRef}
                onClick={(e) => {
                  e.preventDefault();
                  dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
              >
                <div className="items-center flex">
                  <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                    <img
                      alt="..."
                      className="w-full rounded-full align-middle border-none shadow-lg"
                    />
                  </span>
                </div>
              </a>
              <div
                ref={popoverDropdownRef}
                className={
                  (dropdownPopoverShow ? "block " : "hidden ") +
                  "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                }
              >
                {profile ? (
                  <Link to={"/profile"}
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                  >
                    Profile
                  </Link>
                ) : (
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                  >
                    Profile Active
                  </a>
                )}
                <div className="h-0 my-2 border border-solid border-blueGray-100" />
                <Link to={"/"} onClick={logOut}>
                  <AuthVerify logOut={logOut} />
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
};

export default Header;
