import planetsActionTypes from './planets.types';

const END_POINT = 'https://findfalcone.herokuapp.com';

export const fetchPlanetsStart = () => ({
  type: planetsActionTypes.FETCH_PLANETS_START
});

export const fetchPlanetsSuccess = planetsList => ({
  type: planetsActionTypes.FETCH_PLANETS_SUCCESS,
  payload: planetsList
});

export const fetchPlanetsFailure = errorMessage => ({
  type: planetsActionTypes.FETCH_PLANETS_FAILURE,
  payload: errorMessage
});

export const fetchPlanetsStartAsync = () => {
  return dispatch => {
    dispatch(fetchPlanetsStart());
    fetch(`${END_POINT}/planets`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => dispatch(fetchPlanetsSuccess(json)))
      .catch(error => dispatch(fetchPlanetsFailure(error)));
  };
};

export const setPlanetActive = planet => ({
  type: planetsActionTypes.SET_PLANET_ACTIVE,
  payload: planet
});

export const addPlanet = planet => ({
  type: planetsActionTypes.ADD_PLANET,
  payload: planet
});

export const removePlanet = planet => ({
  type: planetsActionTypes.REMOVE_PLANET,
  payload: planet
});
