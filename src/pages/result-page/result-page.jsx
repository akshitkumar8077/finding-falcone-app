import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './result-page.styles.css';

import { fetchFindStartAsync } from '../../redux/find/find.actions';

import ResultComponent from '../../components/result/result.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const ResultComponentWithSpinner = WithSpinner(ResultComponent);

const mapStateToProps = ({ token, planets, vehicles, find }) => ({
  planetsSelected: planets.planetsSelected,
  vehiclesSelected: vehicles.vehiclesSelected,
  token: token.token,
  isFetching: find.isFetching,
  response: find.response
});

const mapDispatchToProps = dispatch => ({
  fetchFindStartAsync: request => dispatch(fetchFindStartAsync(request))
});

const ResultPage = ({
  fetchFindStartAsync,
  planetsSelected,
  vehiclesSelected,
  token,
  isFetching,
  response
}) => {
  //

  useEffect(() => {
    fetchFindStartAsync({
      token: token.token,
      planet_names: planetsSelected.map(item => item.name),
      vehicle_names: vehiclesSelected.map(item => item.name)
    });
  }, [fetchFindStartAsync, planetsSelected, token.token, vehiclesSelected]);

  return (
    <div className='result-page-container'>
      <ResultComponentWithSpinner isLoading={isFetching} response={response} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
