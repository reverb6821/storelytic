import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      
        <div className=" font-bold rounded-lg border shadow-lg p-10" >
            <h2 class="text-gray-800 text-3xl font-semibold">{currentUser.username}</h2>
            <p class="mt-2 text-gray-600">{currentUser.email}</p>
            <p class="mt-2 text-gray-600"> {currentUser.roles &&
                    currentUser.roles.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
            </p>
            <p class="mt-2 text-gray-600">{' '}
                  {currentUser.accessToken.substring(0, 20)} ...{' '}
                  {currentUser.accessToken.substr(
                    currentUser.accessToken.length - 20,
                  )}
            </p>
          </div>
      </div>

  );
};

export default Profile;
