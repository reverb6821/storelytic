import { Link, useLocation } from 'react-router-dom';

import Navigation from './navigation';
import { useToggle } from '../Header/provider/Context';

const style = {
    title: `mx-4 text-sm`,
    active: `bg-gray-700 rounded-full`,
    link: `flex items-center justify-start my-1 p-3 w-full hover:text-white`,
    close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
    open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`,
};

const SidebarItem = () => {
    const { pathname } = useLocation();
    const { open } = useToggle();
    return (
        <ul className="md:pl-3">
            <li>
                {Navigation.map((item) => (
                    <Link to={item.link} key={item.title}>
                        <span className={style.link}>
                            <div
                                className={`p-2 ${item.link === pathname ? style.active : ''}`}
                            >
                                <span>{item.icon}</span>
                            </div>
                            <span
                                className={`${style.title} ${open ? style.open : style.close}`}
                            >
                                {item.title}
                            </span>
                        </span>
                    </Link>
                ))}
            </li>
        </ul>
    );
}

export default SidebarItem;

