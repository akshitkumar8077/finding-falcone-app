import { combineReducers } from 'redux';

import planetsReducer from './planets/planets.reducer';
import vehiclesReducer from './vehicles/vehicles.reducer';
import tokenReducer from './token/token.reducer';
import findReducer from './find/find.reducer';

// export default combineReducers({
//   planets: planetsReducer,
//   vehicles: vehiclesReducer,
//   token: tokenReducer,
//   find: findReducer
// });

const appReducer = combineReducers({
  planets: planetsReducer,
  vehicles: vehiclesReducer,
  token: tokenReducer,
  find: findReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
