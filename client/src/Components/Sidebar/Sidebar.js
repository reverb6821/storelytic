import React, { useState, useEffect, useCallback } from 'react';
import SidebarItem from './sidebarItem';
import Logo from './logo';
import styleSidebar from '../../assets/_sidebar.scss';
import { useToggle } from '../Header/provider/Context';

const style = {
    mobilePosition: {
        left: 'left-0 ',
        right: 'right-0 lg:left-0',
    },
    container: `pb-32 lg:pb-12`,
    close: `duration-700 ease-out hidden transition-all lg:w-24`,
    open: `absolute duration-500 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64`,
    default: `h-screen overflow-y-auto text-white top-0 lg:absolute bg-blue-700 lg:block lg:z-40`,
};

const Sidebar = ({ mobilePosition }) => {

    const { open, ref } = useToggle();
    return (
        <aside
            ref={ref}
            className={`${style.default} ${style.mobilePosition[mobilePosition]} 
            ${open ? style.open : style.close} ${styleSidebar.scrollbar}`}
        >
            <div className={style.container}>
                <Logo />
                <SidebarItem />
            </div>
        </aside>
    );
}

export default Sidebar;