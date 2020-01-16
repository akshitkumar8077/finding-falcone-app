import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        {' '}
        <span>HOME</span>
      </Link>
    </div>
  );
};

export default Header;
