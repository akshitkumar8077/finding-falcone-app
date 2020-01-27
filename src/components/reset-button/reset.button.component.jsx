import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { reset } from '../../redux/reset/reset.actions';

import CustomButton from '../custom-button/custom-button.components';

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset())
});

const ResetButton = () => {
  return (
    <Link onClick={() => reset()} to='/' className='logo-container'>
      <CustomButton>RESET</CustomButton>{' '}
    </Link>
  );
};

export default connect(null, mapDispatchToProps)(ResetButton);
