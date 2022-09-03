import React, { Component } from "react";
import { Link } from "react-router-dom";

import AuthService from "../services/AuthService";
import EventBus from "../common/eventBus";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <nav className="bg-white  shadow dark:border dark:bg-gray-800 dark:border-gray-700 p-2 mt-0 fixed w-full z-10 top-0">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <div className="text-white no-underline hover:text-white hover:no-underline">
              <div className="flex items-center m-2 p-2 text-xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                Storelytic
              </div>
            </div>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              
              {currentUser && (
              <li className="mr-3">
                <Link to={"/product"} className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                  Product
                </Link>
              </li>
              )}
               {showModeratorBoard && (
              <li className="mr-3">
                <Link to={"/mod"} className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                  Staff Board
                </Link>
              </li>
               )}
                {showAdminBoard && (
              <li className="mr-3">
                <Link to={"/admin"} className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                  Admin Board
                </Link>
              </li>
              )}

{currentUser ? ( 
                <>
                <li className="mr-3">
                  <Link to={"/profile"} className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="mr-3">
                    <a href="/"  onClick={this.logOut} className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                      Log Out
                    </a>
                  </li></>
   ) : (
    <><li className="mr-3">
                    <Link to={"/"} className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                      Login
                    </Link>
                  </li><li className="mr-3">
                      <Link to={"/register"}  className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                        Register
                      </Link>
                    </li></>
    )}
            </ul>
          </div>
        </div>
      </nav>
    )

  }
}