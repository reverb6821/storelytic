import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as NavLink, Link } from 'react-router-dom';
import { createPopper } from "@popperjs/core";

import { logout } from '../../slices/auth';
import AuthVerify from "../../common/AuthVerify";
import EventBus from '../../common/eventBus';

const UserDropdown = () => {

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
    }, [currentUser, logOut]);

    return (
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
    );
}

export default UserDropdown;