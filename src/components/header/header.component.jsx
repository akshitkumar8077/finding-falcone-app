import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { reset } from '../../redux/reset/reset.actions';

import './header.styles.css';

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset())
});

const Header = ({ reset, match }) => {
  console.log('TLC: Header -> match', match.params);
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        {' '}
        <p>
          <strong>HOME</strong>
        </p>
      </Link>
      <div className='option'>
        <Link onClick={() => reset()} to='/'>
          {' '}
          <span>RESET</span>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(connect(null, mapDispatchToProps)(Header));
