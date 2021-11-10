import styled from 'styled-components';
import{ HomeSmile } from '@styled-icons/boxicons-regular'
import {TruckLoading, Truck, Warehouse } from '@styled-icons/fa-solid'
import {BoxArrowInDown,BoxArrowInUp } from '@styled-icons/bootstrap'

const Navigation= [
    {
      title: 'Home',
      icon: <HomeSmile />,
      link: '/publicboard',
    },
    {
      title: 'GRN',
      icon: <TruckLoading />,
      link: '/publicboard',
    },
    {
      title: 'Delivery Order',
      icon: <Truck />,
      link: '/publicboard',
    },
    {
      title: 'Stock Transfer',
      icon: <Warehouse />,
      link: '/publicboard',
    },
    {
      title: 'Stock Take',
      icon: <BoxArrowInUp />,
      link: '/publicboard',
    },
    {
      title: 'Stock Out',
      icon: <BoxArrowInDown />,
      link: '/publicboard',
    },
  ];
  
  export default Navigation;
