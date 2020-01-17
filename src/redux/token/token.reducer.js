import tokenActionTypes from './token.types';

const INITIAL_STATE = {
  token: null,
  isFetchingToken: false,
  errorMessageToken: undefined
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tokenActionTypes.FETCH_TOKEN_START:
      return {
        ...state,
        isFetchingToken: true
      };
    case tokenActionTypes.FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        isFetchingToken: false,
        token: action.payload
      };
    case tokenActionTypes.FETCH_TOKEN_FAILURE:
      return {
        ...state,
        isFetchingToken: false,
        errorMessageToken: action.payload
      };

    default:
      return state;
  }
};

export default tokenReducer;
