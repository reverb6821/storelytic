import React, { useState, useEffect } from 'react';

import userService from '../../services/userService';
import eventBus from '../../common/eventBus';

const AdminBoard = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    userService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          eventBus.dispatch('logout');
        }
      },
    );
  }, []);

  return (
    <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
      {content}
    </div>
  );
};

export default AdminBoard;
