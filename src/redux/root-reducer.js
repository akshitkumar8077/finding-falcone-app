import { combineReducers } from 'redux';

import planetsReducer from './planets/planets.reducer';
import vehiclesReducer from './vehicles/vehicles.reducer';
import tokenReducer from './token/token.reducer';

export default combineReducers({
  planets: planetsReducer,
  vehicles: vehiclesReducer,
  token: tokenReducer
});
