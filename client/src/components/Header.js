import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as  Link } from "react-router-dom";
import Profile from '../pages/profile';

import { logout } from "../slices/auth";

import EventBus from "../common/eventBus";

const Header = () => {

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
    <div>
      <nav className="bg-blue-600 shadow dark:bg-gray-800 m-1.5 rounded-lg">
        <div
          className="
      container
      px-6
      py-3
      mx-auto
      md:flex md:justify-between md:items-center
    "
        >
          <div className="flex items-center justify-between">
            <div>
              <Link to={"/home"}
                className="
            text-xl
            font-bold
            text-gray-800
            dark:text-white
            md:text-2xl
            hover:text-gray-700
            dark:hover:text-gray-300
          "
                href="#"
              >Storelytic</Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="
            text-gray-500
            dark:text-gray-200
            hover:text-gray-600
            dark:hover:text-gray-400
            focus:outline-none focus:text-gray-600
            dark:focus:text-gray-400
          "
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">
              <a
                className="
            my-1
            text-gray-700
            dark:text-gray-200
            hover:text-indigo-500
            dark:hover:text-indigo-400
            md:mx-4 md:my-0
          "
                href="#"
              >Home</a
              >
              <a
                className="
            my-1
            text-gray-700
            dark:text-gray-200
            hover:text-indigo-500
            dark:hover:text-indigo-400
            md:mx-4 md:my-0
          "
                href="#"
              >Dashboard</a
              >
              <a
                className="
            my-1
            text-gray-700
            dark:text-gray-200
            hover:text-indigo-500
            dark:hover:text-indigo-400
            md:mx-4 md:my-0
          "
                href="#"
              >Item List</a>

              {currentUser ? (
                <div className="items-center md:flex">
                  <div className="items-center md:flex">
              <Link to={"/profile"}
                className="
                  my-1
                  text-gray-700
                  dark:text-gray-200
                  hover:text-indigo-500
                  dark:hover:text-indigo-400
                  md:mx-4 md:my-0"
                  >
                    Profile
              </Link>
                </div>
              <a to={"/"}
                className="
                    my-1
                    text-gray-700
                    dark:text-gray-200
                    hover:text-indigo-500
                    dark:hover:text-indigo-400
                    md:mx-4 md:my-0"
                    onClick={logOut}>
                      Logout</a>
                      </div>
              ) : (
                <Link to={"/login"}
                  className="
            my-1
            text-gray-700
            dark:text-gray-200
            hover:text-indigo-500
            dark:hover:text-indigo-400
            md:mx-4 md:my-0
          ">Login</Link>
              )}
            </div>
          </div>
        </div>
      </nav>


    </div>
  );
}

export default Header;