import { combineReducers } from 'redux';

import planetsReducer from './planets/planets.reducer';
import vehiclesReducer from './vehicles/vehicles.reducer';

export default combineReducers({
  planets: planetsReducer,
  vehicles: vehiclesReducer
});
