import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { logout } from '../../slices/auth';
import EventBus from '../../common/eventBus';

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
    <div>
      <ul className="flex">
        <li className="flex-1 mr-2">
          <Link to={"/publicboard"}>
            <a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"  >Storelytic</a>
          </Link>
        </li>
        {showModeratorBoard && (
          <li className="flex-1 mr-2">
            <Link to={"/moderatorboard"}>
              <a className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" >Moderator</a>
            </Link>
          </li>
        )}
        {showAdminBoard && (
          <li className="flex-1 mr-2">
            <Link to={"/adminboard"}>
              <a className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" >Admin</a>
            </Link>
          </li>
        )}
        {currentUser && (
          <li className="text-center flex-1">
            <Link to={"/publicboard"}>
              <a className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" >Public Board</a>
            </Link>
          </li>
        )}
     
      {currentUser && (
        <div className="flex">
          <li className="text-center flex-1">
            <Link to={"/profile"}>
              <a className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" >{currentUser.username}</a>
            </Link>
          </li>
          <li className="text-center flex-1">
            <Link to={"/"}>
              <a className="text-center block border border-white rounded hover:border-gray-200 text-red-500 hover:bg-gray-200 py-2 px-4" onClick={logOut}>Logout</a>
            </Link>
          </li>
        </div>
      )}
      </ul>
    </div>
  );
};

export default Header;
