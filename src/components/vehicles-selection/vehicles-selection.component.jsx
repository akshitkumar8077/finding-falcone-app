import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './vehicles-selection.styles.css';

import CustomButton from '../custom-button/custom-button.components';

import {
  renderVehicleCardClassName,
  renderVehicleImgClassName,
  calculTimeTaken
} from './vehicles-selection.utils';

import {
  addVehicle,
  removeVehicle,
  updateStock
} from '../../redux/vehicles/vehicles.actions';

import { addPlanet, removePlanet } from '../../redux/planets/planets.actions';

const mapStateToProps = ({ planets, vehicles }) => ({
  planetActive: planets.planetActive,
  planetsSelected: planets.planetsSelected,
  vehiclesSelected: vehicles.vehiclesSelected
});

const mapDispatchToProps = dispatch => ({
  addVehicle: (vehicle, destination) =>
    dispatch(addVehicle(vehicle, destination)),
  removeVehicle: (vehicle, destination) =>
    dispatch(removeVehicle(vehicle, destination)),
  addPlanet: planet => dispatch(addPlanet(planet)),
  removePlanet: planet => dispatch(removePlanet(planet)),
  updateStock: () => dispatch(updateStock())
});

const VehiclesSelection = ({
  vehiclesList,
  planetActive,
  addVehicle,
  addPlanet,
  removePlanet,
  vehiclesSelected,
  removeVehicle,
  updateStock,
  planetsSelected
}) => {
  //

  const handleClick = (vehicle, planetActive) => {
    const vehicleAlreadySelected = vehiclesSelected.find(
      vehicleSelected =>
        vehicleSelected.destination === planetActive.name &&
        vehicleSelected.name === vehicle.name
    );

    const planetAlreadySelected = planetsSelected.find(
      planet => planet.name === planetActive.name
    );

    if (vehicleAlreadySelected) {
      return (
        // i want to de-select my vehicle
        [
          removeVehicle(vehicle, planetActive.name),
          removePlanet(planetActive),
          updateStock()
        ]
      );
    } else {
      return [
        removePlanet(planetActive),
        addPlanet(planetActive),
        addVehicle(vehicle, planetActive.name),
        updateStock()
      ];
    }
  };

  const vehicles =
    vehiclesList &&
    vehiclesList.map(vehicle => (
      <div
        className={renderVehicleCardClassName(
          vehicle,
          vehiclesSelected,
          planetActive
        )}
        key={vehicle.name}
        onClick={() => handleClick(vehicle, planetActive)}
      >
        <img
          className={renderVehicleImgClassName(
            vehicle,
            vehiclesSelected,
            planetActive
          )}
          src={require(`../../assets/vehicles/${vehicle.name}.png`)}
          alt={vehicle.name}
        />
        <h3>{vehicle.name}</h3>
        <span>
          Remaining:
          <strong>
            {vehicle.remain_no || vehicle.remain_no === 0
              ? vehicle.remain_no
              : vehicle.total_no}
          </strong>
        </span>
        <span>
          Max. distance: <strong>{vehicle.max_distance}</strong>
        </span>
        <span>
          Speed: <strong>{vehicle.speed} ly</strong>
        </span>
      </div>
    ));

  return (
    <div className='vehicles-wrapper'>
      <h3>
        Select vehicles you want to send on {planetActive.name.toUpperCase()}
      </h3>
      <div className='vehicles-container'>
        {vehicles}
        <div className='vehicle-card'>
          <span>
            TIME TAKEN:{' '}
            <strong>
              {calculTimeTaken(planetsSelected, vehiclesSelected)} light year
            </strong>{' '}
          </span>
          <Link to='/result'>
            <CustomButton>LAUNCHING</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(VehiclesSelection);
