import resetActionTypes from './reset.types';

const INITIAL_STATE = {};

const resetApp = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case resetActionTypes.RESET_APP:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default resetApp;
