import vehiclesActionTypes from './vehicles.types';

import { addVehicule, removeVehicule, updateStock } from './vehicles.utils';

const INITIAL_STATE = {
  vehiclesList: [],
  isFetching: false,
  errorMessage: undefined,
  isHidden: true,
  vehiclesSelected: []
};

const vehiclesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case vehiclesActionTypes.UPDATE_STOCK:
      return {
        ...state,
        vehiclesList: updateStock(state.vehiclesList, state.vehiclesSelected)
      };
    case vehiclesActionTypes.ADD_VEHICLE:
      return {
        ...state,
        vehiclesSelected: addVehicule(state.vehiclesSelected, action.payload)
      };
    case vehiclesActionTypes.REMOVE_VEHICLE:
      return {
        ...state,
        vehiclesSelected: removeVehicule(state.vehiclesSelected, action.payload)
      };
    case vehiclesActionTypes.FETCH_VEHICLES_START:
      return {
        ...state,
        isFetching: true
      };
    case vehiclesActionTypes.FETCH_VEHICLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        vehiclesList: action.payload
      };
    case vehiclesActionTypes.FETCH_VEHICLES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case vehiclesActionTypes.TOGGLE_VEHICLES_HIDDEN:
      return {
        ...state,
        isHidden: false
      };

    default:
      return state;
  }
};

export default vehiclesReducer;
