import React from "react";
import { useState, useEffect } from "react";

import { FcExport } from 'react-icons/fc'
import { NavLink } from 'react-router-dom';

import * as authService from '../../services/auth.service';
import eventBus from '../../common/eventBus';
import IUser from '../../interfaces/IUser';
import { NavigateFunction, useNavigate, Link  } from 'react-router-dom';

import { FcDeployment, FcMenu } from 'react-icons/fc'

const Navbar: React.FC =()=>{
  let navigate: NavigateFunction = useNavigate();
  const [showSuperAdminBoard, setShowSuperAdminBoard] = useState<boolean>(false);
  const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  //darkmode
  const [theme, setTheme] = useState<string | null>(null)
  //responsive
  const [navbar, setNavbar] = useState<boolean>(false);

  const handleThemeSwitch =()=>{
    setTheme(theme === 'dark' ? 'light' : 'dark')
    localStorage.setItem('dark', 'light' );
  }

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowSuperAdminBoard(user.roles.includes("ROLE_SUPERADMIN"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    eventBus.on("logout", logOut);

    return () => {
      eventBus.remove("logout", logOut);
    };
  }, []);

   //useEffect darkmode
   useEffect(()=>{
    if(theme === 'dark'){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')

    }
   }, [theme])

  const logOut = () => {
    authService.logout();
    setShowSuperAdminBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
    window.location.reload();
  };

  return(
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a 
                    href="/" 
                    className="flex items-center"
                >
                    <FcDeployment className="mr-3 h-6 sm:h-9 text-[30px] text-blue-600" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        StoreLytic
                    </span>
                </a>
                <button 
                    data-collapse-toggle="navbar-default" 
                    type="button" 
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="navbar-default" 
                    aria-expanded="false"
                    onClick={() => setNavbar(!navbar)}
                >
                    <FcMenu className="w-6 h-6"/>
                </button>
                <div className={`w-full md:block md:w-auto ${ navbar ? "block" : "hidden"}`} id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-800">
                        {currentUser ? (
                            <>
                                <li>
                                    <NavLink 
                                        to={'/'} 
                                        className={({ isActive }) => (isActive ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' : 'block py-2 pr-4 pl-3 text-grey-500 rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white')} 
                                        aria-current="page"
                                    >
                                        Products Manager
                                        
                                    </NavLink>
                                </li>
                                {showSuperAdminBoard && (
                                <li>
                                    <NavLink 
                                        to={'/users-manager'} 
                                        className={({ isActive }) => (isActive ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' : 'block py-2 pr-4 pl-3 text-grey-500 rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white')} 
                                        aria-current="page"
                                    >
                                        Users Manager
                                        
                                    </NavLink>
                                </li>  
                                )}
                                <li>
                                    <NavLink 
                                        to={'/profile'} 
                                        className={({ isActive }) => (isActive ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' : 'block py-2 pr-4 pl-3 text-grey-500  rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white')} 
                                        aria-current="page"
                                    >
                                        {currentUser.username}     
                                    </NavLink>
                                </li>                      
                                <li>
                                    <button 
                                        onClick={logOut} 
                                        title='Log out'
                                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        <FcExport size={20} />
                                    </button>
                                </li>
                            </>
                            ) : (
                            <>
                                <li>
                                <NavLink 
                                    to="sign-in" 
                                    className={({ isActive }) => (isActive ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' : 'block py-2 pr-4 pl-3 text-grey-500 bg-blue-700 rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white')} 
                                    aria-current="page"
                                >
                                    Sign In
                                </NavLink>
                                </li>
                                <li>
                                <NavLink 
                                    to="sign-up" 
                                    className={({ isActive }) => (isActive ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' : 'block py-2 pr-4 pl-3 text-grey-500 bg-blue-700 rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white')} 
                                >
                                    Sign Up
                                </NavLink>
                                </li>
                            </>
                        )}
                            <li>
                                <button 
                                    type="button" 
                                    onClick={handleThemeSwitch}
                                >
                                   {theme === 'dark' ? '🌕' : '☀️'}
                                </button>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
  )

}

export default Navbar