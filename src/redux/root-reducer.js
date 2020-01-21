import { combineReducers } from 'redux';

import planetsReducer from './planets/planets.reducer';
import vehiclesReducer from './vehicles/vehicles.reducer';
import tokenReducer from './token/token.reducer';
import findReducer from './find/find.reducer';

import resetActionTypes from './reset/reset.types';

const appReducer = combineReducers({
  planets: planetsReducer,
  vehicles: vehiclesReducer,
  token: tokenReducer,
  find: findReducer
});

const rootReducer = (state, action) => {
  if (action.type === resetActionTypes.RESET_APP) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
