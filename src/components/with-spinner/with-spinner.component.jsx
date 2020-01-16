import React from 'react';

import { ReactComponent as Logo } from '../../assets/bar-spinner.svg';

import './with-spinner.styles.css';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div>
      <Logo />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
