import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ChartCard from '../../Components/Stat/StatCard';

import userService from '../../services/userService';
import eventBus from '../../common/eventBus';

const PublicBoard = ({}) => {
  const [content, setContent] = useState('');
  const { user: currentUser } = useSelector((state) => state.auth);



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
    
<ChartCard></ChartCard>
    

  );
};

export default PublicBoard;
