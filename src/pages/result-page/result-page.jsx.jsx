import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './result-page.styles.css';

import { fetchTokenStartAsync } from '../../redux/token/token.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = ({ token, planets, vehicles }) => ({
  planetsSelected: planets.planetsSelected,
  vehiclesSelected: vehicles.vehiclesSelected,
  token: token.token,
  isFetching: token.isFetching,
  erroMessage: token.erroMessage
});

const mapDispatchToProps = dispatch => ({
  fetchTokenStartAsync: () => dispatch(fetchTokenStartAsync())
});

const ResultPage = ({
  fetchTokenStartAsync,
  planetsSelected,
  vehiclesSelected
}) => {
  //
  useEffect(() => {
    fetchTokenStartAsync();
  }, [fetchTokenStartAsync]);

  return (
    <div className='result-page-container'>
      <span>je fetch mon token</span>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
