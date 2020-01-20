import findActionTypes from './find.types';

const INITIAL_STATE = {
  response: null,
  isFetching: false,
  errorMessage: undefined
};

const findReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case findActionTypes.FETCH_FIND_START:
      return {
        ...state,
        isFetching: true
      };
    case findActionTypes.FETCH_FIND_SUCCESS:
      return {
        ...state,
        isFetching: false,
        response: action.payload
      };
    case findActionTypes.FETCH_FIND_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default findReducer;
