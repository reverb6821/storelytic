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
      <nav class="bg-white  shadow dark:border dark:bg-gray-800 dark:border-gray-700 p-2 mt-0 fixed w-full z-10 top-0">
        <div class="container mx-auto flex flex-wrap items-center">
          <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <div class="text-white no-underline hover:text-white hover:no-underline">
              <span class="text-2xl font-semibold text-gray-900 dark:text-white pl-2">
                <i class="em em-grinning"></i> 
                StoreLytic
                </span>
            </div>
          </div>
          <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
              
              {currentUser && (
              <li class="mr-3">
                <Link to={"/product"} class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                  Product
                </Link>
              </li>
              )}
               {showModeratorBoard && (
              <li class="mr-3">
                <Link to={"/mod"} class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                  Staff Board
                </Link>
              </li>
               )}
                {showAdminBoard && (
              <li class="mr-3">
                <Link to={"/admin"} class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                  Admin Board
                </Link>
              </li>
              )}

{currentUser ? ( 
                <>
                <li class="mr-3">
                  <Link to={"/profile"} class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                    {currentUser.username}
                  </Link>
                </li>
                <li class="mr-3">
                    <a href="/"  onClick={this.logOut} class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                      Log Out
                    </a>
                  </li></>
   ) : (
    <><li class="mr-3">
                    <Link to={"/"} class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                      Login
                    </Link>
                  </li><li class="mr-3">
                      <Link to={"/register"}  class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
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