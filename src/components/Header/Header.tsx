import './header.css';

import React, { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);
  return (
    <header className='bg-black'>
    <nav className="bg-black">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
        <a href="#" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Christian Oertlin
          </span>
        </a>
        <ul className="flex flex-row ml-auto gap-x-8">
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-primary-700 md:p-0"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-primary-700 md:p-0"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-primary-700 md:p-0"
            >
              Work
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  );
}
export default Header;