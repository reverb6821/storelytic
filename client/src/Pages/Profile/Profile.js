import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../../Components/Header/Header';

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      {' '}
      <Header></Header>
      <div class="bg-white block py-10">
        <div class="max-w-2xl mx-auto">
          <div class="w-full">
            <div class="w-full bg-blue-600 h-48 rounded-t-lg"></div>
            <div class="absolute -mt-20 ml-5">
              <div class="bg-gray-200 border border-gray-300 h-36 w-40 rounded-lg shadow-md border-b border-primary"></div>
            </div>
          </div>

          <div class="bg-primary border border-primary rounded-b-lg p-5 pt-20 flex flex-col">
            <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-40">
              <p>{currentUser.username}</p>
            </div>
            <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-96">
              <p>{currentUser.email}</p>
            </div>
            <div class="text-sm mt-2 text-gray-200">
              <div class="flex flex-row ml-auto space-x-2 items-center">
                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20">
                  3
                </div>
                <div class="bg-blue-200 rounded-full h-1 w-1"></div>
                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20">
                  4
                </div>
              </div>
            </div>

            <div class="pt-8 flex gap-8">
              <div class="flex flex-col">
                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20">
                  TEST
                </div>
                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20">
                  TEST1
                </div>
              </div>
              <div class="flex flex-col">
                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20">
                  TEST2
                </div>
                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20">
                  TEST3
                </div>
              </div>
              <div class="flex flex-col">
                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20">
                  TEST4
                </div>
                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20">
                  TEST5
                </div>
              </div>
              <div class="flex flex-col">
                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20">
                  TEST6
                </div>
                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20">
                  TEST7
                </div>
              </div>
            </div>
            <div class="py-5 break-all bbcode">
              <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-44">
                Token Access:
              </div>
              <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-full h-10">
                <p>
                  <strong>Token:</strong>{' '}
                  {currentUser.accessToken.substring(0, 20)} ...{' '}
                  {currentUser.accessToken.substr(
                    currentUser.accessToken.length - 20,
                  )}
                </p>
              </div>
              <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-44">
                Authorities:
              </div>
              <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-full h-10">
                <ul>
                  {currentUser.roles &&
                    currentUser.roles.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
