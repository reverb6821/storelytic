import React, { useState, useEffect } from 'react';

import userService from '../../services/userService';
import eventBus from '../../common/eventBus';

const PublicBoard = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    userService.getUserBoard().then(
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
    <div>
      <h3>{content}</h3>
    </div>
  );
};

export default PublicBoard;
