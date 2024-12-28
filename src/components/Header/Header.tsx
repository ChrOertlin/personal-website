import React from 'react';
import NavBar from '../NavBar/NavBar.tsx';
const Header: React.FC = () => {
  return (
    <header className='bg-black h-16 fixed top-0 w-full z-10'>
      <div className='flex flex-wrap justify-center items-center mx-auto max-w-screen-lg'>
        <h1 className='text-4xl text-white font-bold'>Christian Oertlin</h1>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;