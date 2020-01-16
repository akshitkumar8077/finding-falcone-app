import vehiclesActionTypes from './vehicles.types';

const END_POINT = 'https://findfalcone.herokuapp.com';

export const fetchVehiclesStart = () => ({
  type: vehiclesActionTypes.FETCH_VEHICLES_START
});

export const fetchVehiclesSuccess = vehiclesList => ({
  type: vehiclesActionTypes.FETCH_VEHICLES_SUCCESS,
  payload: vehiclesList
});

export const fetchVehiclesFailure = errorMessage => ({
  type: vehiclesActionTypes.FETCH_VEHICLES_FAILURE,
  payload: errorMessage
});

export const fetchVehiclesStartAsync = () => {
  return dispatch => {
    dispatch(fetchVehiclesStart());
    fetch(`${END_POINT}/vehicles`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => dispatch(fetchVehiclesSuccess(json)))
      .catch(error => dispatch(fetchVehiclesFailure(error)));
  };
};

export const toggleVehiclesHidden = () => ({
  type: vehiclesActionTypes.TOGGLE_VEHICLES_HIDDEN
});

export const addVehicle = (vehicle, planet) => ({
  type: vehiclesActionTypes.ADD_VEHICLE,
  payload: { ...vehicle, destination: planet }
});

export const removeVehicle = (vehicle, planet) => ({
  type: vehiclesActionTypes.REMOVE_VEHICLE,
  payload: { ...vehicle, destination: planet }
});

export const updateStock = () => ({
  type: vehiclesActionTypes.UPDATE_STOCK
});
