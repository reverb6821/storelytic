import { NavLink, useLocation } from 'react-router-dom';

import { Menu } from 'antd';
import logo from '../../assets/images/logo.png';

import {Dashboard, Notepad} from '@styled-icons/boxicons-solid'
import {CreditCard2FrontFill} from '@styled-icons/bootstrap'
import { Warehouse } from '@styled-icons/fa-solid'
import { PackageIcon, PackageDependencies, PackageDependents } from '@styled-icons/octicons'

function Sidebar({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace('/', '');

  return (
    <>
      <div className='brand'>
        <img src={logo} alt='' />
        <span>StoreLytic</span>
      </div>
      <hr />
      <Menu theme='light' mode='inline'>
        <Menu.Item key='1'>
          <NavLink to='/dashboard'>
            <span
              className='icon'
              style={{
                background: page === 'dashboard' ? color : '',
              }}
            >
              <Dashboard size={20}/>
            </span>
            <span className='label'>Home</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key='2'>
          <NavLink to='/products-list'>
            <span
              className='icon'
              style={{
                background: page === 'Product' ? color : '',
              }}
            >
              <Notepad size={20}/>
            </span>
            <span className='label'>Product</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key='3'>
          <NavLink to='/billing'>
            <span
              className='icon'
              style={{
                background: page === 'billing' ? color : '',
              }}
            >
              <CreditCard2FrontFill size={20}/>
            </span>
            <span className='label'>Billing</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key='4'>
          <NavLink to='/warehouse'>
            <span
              className='icon'
              style={{
                background: page === 'rtl' ? color : '',
              }}
            >
              <Warehouse size={20}/>
            </span>
            <span className='label'>Warehouse</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item className='menu-item-header' key='5'>
          Shipment
        </Menu.Item>
        <Menu.Item key='6'>
          <NavLink to='/Order'>
            <span
              className='icon'
              style={{
                background: page === 'Order' ? color : '',
              }}
            >
              <PackageIcon size={20}/>
            </span>
            <span className='label'>Order</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key='7'>
          <NavLink to='/inbound'>
            <span className='icon'><PackageDependencies size={20}/></span>
            <span className='label'>Shipping Inbound</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key='8'>
          <NavLink to='/outbound'>
            <span className='icon'><PackageDependents size={20}/></span>
            <span className='label'>Shipping Outbound</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Sidebar;