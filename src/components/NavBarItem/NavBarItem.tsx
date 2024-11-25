import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavBarItemProps {
    href: string;
    itemName: string;
  }

const NavBarItem: React.FC<NavBarItemProps> = ({ href, itemName, }) => {
    return(
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive
            ? 'text-red-600 font-bold'
            : 'text-white'
        }
        aria-current="page"
      >
        {itemName}
      </NavLink>
    </li>

)};

export default NavBarItem;
export type { NavBarItemProps };