import tokenActionTypes from './token.types';

const END_POINT = 'https://findfalcone.herokuapp.com';

export const fetchTokenStart = () => ({
  type: tokenActionTypes.FETCH_TOKEN_START
});

export const fetchTokenSuccess = TOKENList => ({
  type: tokenActionTypes.FETCH_TOKEN_SUCCESS,
  payload: TOKENList
});

export const fetchTokenFailure = errorMessage => ({
  type: tokenActionTypes.FETCH_TOKEN_FAILURE,
  payload: errorMessage
});

export const fetchTokenStartAsync = () => {
  return dispatch => {
    dispatch(fetchTokenStart());
    fetch(`${END_POINT}/token`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => dispatch(fetchTokenSuccess(json)))
      .catch(error => dispatch(fetchTokenFailure(error)));
  };
};
