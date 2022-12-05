import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-[#354F52] flex justify-around items-center p-4">
      <Logo />
      <Link to="/">
        <h1 className="text-2xl font-bold text-white font-mono">Areas of life</h1>
      </Link>
    </div>
  );
};

export default Header;
