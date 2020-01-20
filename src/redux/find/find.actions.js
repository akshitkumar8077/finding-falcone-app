import findActionTypes from './find.types';

const END_POINT = 'https://findfalcone.herokuapp.com';

export const fetchFindStart = () => ({
  type: findActionTypes.FETCH_FIND_START
});

export const fetchFindSuccess = json => ({
  type: findActionTypes.FETCH_FIND_SUCCESS,
  payload: json
});

export const fetchFindFailure = errorMessage => ({
  type: findActionTypes.FETCH_FIND_FAILURE,
  payload: errorMessage
});

export const fetchFindStartAsync = request => {
  return dispatch => {
    dispatch(fetchFindStart());
    fetch(`${END_POINT}/find`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => dispatch(fetchFindSuccess(json)))
      .catch(error => dispatch(fetchFindFailure(error)));
  };
};
