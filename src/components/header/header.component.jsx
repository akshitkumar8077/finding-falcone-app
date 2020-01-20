import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { reset } from '../../redux/reset/reset.actions';

import './header.styles.css';

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset())
});

const Header = ({ reset }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        {' '}
        <span>HOME</span>
      </Link>
      <Link onClick={() => reset()} to='/' className='logo-container'>
        {' '}
        <span>RESET</span>
      </Link>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Header);
