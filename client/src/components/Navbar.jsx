import { useState,useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/auth";
import EventBus from "../common/eventBus";

import { NavLink } from 'react-router-dom';
import { RiMenu4Fill } from 'react-icons/ri'
import {TbBuildingWarehouse} from 'react-icons/tb'

const Navbar =()=>{

    //darkmode
    const [theme, setTheme] = useState(null)
    //responsive
    const [navbar, setNavbar] = useState(false);
    //role display
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleThemeSwitch =()=>{
        setTheme(theme === 'dark' ? 'light' : 'dark')
        localStorage.setItem('dark', 'light' );
    }

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

    //useEffect darkmode
    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')

        }
    }, [theme])

    return(
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a 
                    href="/" 
                    className="flex items-center"
                >
                    <TbBuildingWarehouse className="mr-3 h-6 sm:h-9 text-[30px] text-blue-600" />
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
                    <RiMenu4Fill className="w-6 h-6"/>
                </button>
                <div className={`w-full md:block md:w-auto ${ navbar ? "block" : "hidden"}`} id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-800">
                        {currentUser ? (
                            <>
                                <li>
                                    <NavLink 
                                        to={'/'} 
                                        className={({ isActive }) => (isActive ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' : 'block py-2 pr-4 pl-3 text-grey-500 bg-blue-700 rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white')} 
                                        aria-current="page"
                                    >
                                        Home
                                        
                                    </NavLink>
                                </li>  
                                <li>
                                    <NavLink 
                                        to={'/profile'} 
                                        className={({ isActive }) => (isActive ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' : 'block py-2 pr-4 pl-3 text-grey-500 bg-blue-700 rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white')} 
                                        aria-current="page"
                                    >
                                        {currentUser.username}     
                                    </NavLink>
                                </li>                      
                                <li>
                                    <a href="#" onClick={logOut} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Out</a>
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
                                    href="#"
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