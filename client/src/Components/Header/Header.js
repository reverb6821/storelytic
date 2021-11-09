import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Link } from 'react-router-dom';

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
      <ul class="flex">
        <li class="flex-1 mr-2">
          <Link class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" to={"/publicboard"} >Storelytic</Link>
        </li>
        {showModeratorBoard && (
        <li class="flex-1 mr-2">
          <Link class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" to={"/moderatorboard"}>Moderator</Link>
        </li>
        )}
        {showAdminBoard && (
        <li class="flex-1 mr-2">
          <Link class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" to={"/adminboard"}>Admin</Link>
        </li>
        )}
        {currentUser && (
        <li class="text-center flex-1">
          <a class="block py-2 px-4 text-gray-400 cursor-not-allowed" to={"/publicboard"}>Public Board</a>
        </li>
        )}
        {currentUser && (
          <div>
            <li class="text-center flex-1">
              <Link class="block py-2 px-4 text-gray-400 cursor-not-allowed" to={"/profile"}>{currentUser.username} - Profile</Link>
            </li>
            <li class="text-center flex-1">
              <Link class="block py-2 px-4 text-gray-400 cursor-not-allowed" to={"/"} onClick={logOut}>Logout</Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Header;
