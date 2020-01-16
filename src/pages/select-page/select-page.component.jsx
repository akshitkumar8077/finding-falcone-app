import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './select-page.styles.css';

import { fetchPlanetsStartAsync } from '../../redux/planets/planets.actions';
import { fetchVehiclesStartAsync } from '../../redux/vehicles/vehicles.actions';

import PlanetSelection from '../../components/planets-selection/planets-selection.component';
import VehiclesSelection from '../../components/vehicles-selection/vehicles-selection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const PlanetSelectionWithSpinner = WithSpinner(PlanetSelection);
const VehiclesSelectionWithSpinner = WithSpinner(VehiclesSelection);

const mapStateToProps = ({ planets, vehicles }) => ({
  planetsList: planets.planetsList,
  isFetchingPlanets: planets.isFetching,
  vehiclesList: vehicles.vehiclesList,
  isFetchingVehicles: vehicles.isFetching,
  isHidden: vehicles.isHidden
});

const mapDispatchToProps = dispatch => ({
  fetchPlanetsStartAsync: () => dispatch(fetchPlanetsStartAsync()),
  fetchVehiclesStartAsync: () => dispatch(fetchVehiclesStartAsync())
});

const SelectPage = ({
  fetchPlanetsStartAsync,
  isFetchingPlanets,
  planetsList,

  fetchVehiclesStartAsync,
  isFetchingVehicles,
  vehiclesList,
  isHidden
}) => {
  //
  useEffect(() => {
    fetchPlanetsStartAsync();
    fetchVehiclesStartAsync();
  }, [fetchPlanetsStartAsync, fetchVehiclesStartAsync]);

  return (
    <div className='select-page-container'>
      <PlanetSelectionWithSpinner
        isLoading={isFetchingPlanets}
        planetsList={planetsList}
        vehiclesList={vehiclesList}
      />
      {isHidden ? null : (
        <VehiclesSelectionWithSpinner
          isLoading={isFetchingVehicles}
          vehiclesList={vehiclesList}
        />
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPage);
