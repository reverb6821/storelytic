import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return (

    <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          User Profile
        </h1>

        <div>
          <div className="space-y-4 md:space-y-6" >

            <div>
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</span>
              <p className="border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {currentUser.username}
              </p>
            </div>

            <div>
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Token</span>
              <p className="border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {currentUser.accessToken.substring(0, 20)} ...{" "}
                {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
              </p>
            </div>

            <div>
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Roles</span>
              <ul className="border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {currentUser.roles && currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
export default ProfileCard;