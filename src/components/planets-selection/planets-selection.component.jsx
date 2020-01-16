import React from 'react';
import { connect } from 'react-redux';

import { toggleVehiclesHidden } from '../../redux/vehicles/vehicles.actions';
import { setPlanetActive } from '../../redux/planets/planets.actions';

import { isPlanetSelected, isPlanetActive } from './planets-selection.utils';

import './planets-selection.styles.css';

const mapStateToProps = ({ planets }) => ({
  planetActive: planets.planetActive,
  planetsSelected: planets.planetsSelected
});
const mapDispatchToProps = dispatch => ({
  toggleVehiclesHidden: () => dispatch(toggleVehiclesHidden()),
  setPlanetActive: planet => dispatch(setPlanetActive(planet))
});

const PlanetSelection = ({
  planetsList,
  toggleVehiclesHidden,
  setPlanetActive,
  planetActive,
  planetsSelected
}) => {
  //

  const handleClick = planet => {
    setPlanetActive(planet);
    toggleVehiclesHidden();
  };

  const planets =
    planetsList &&
    planetsList.map((planet, i) => (
      <div key={planet.name}>
        <div
          className={`
          ${'planet-card'}
          ${isPlanetSelected(planet, planetsSelected)}
          ${isPlanetActive(planet, planetActive)}
          `}
          onClick={() => handleClick(planet)}
        >
          <img
            className='card__img'
            src={require(`../../assets/planets/${planet.name}.png`)}
            alt={planet.name}
          />
          <h3>{planet.name.toUpperCase()}</h3>
          <span>
            Distance: <strong>{planet.distance} ly</strong>
          </span>
        </div>
      </div>
    ));

  return (
    <div className='planets-wrapper'>
      <h3>Select 4 planets you want to search in:</h3>
      <div className='planets-container'>{planets}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetSelection);
