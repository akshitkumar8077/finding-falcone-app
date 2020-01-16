import planetsActionTypes from './planets.types';

const INITIAL_STATE = {
  planetsList: null,
  planetsSelected: [],
  isFetching: false,
  errorMessage: undefined,
  planetActive: null
};

const planetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case planetsActionTypes.SET_PLANET_ACTIVE:
      return {
        ...state,
        planetActive: action.payload
      };
    case planetsActionTypes.FETCH_PLANETS_START:
      return {
        ...state,
        isFetching: true
      };
    case planetsActionTypes.FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        planetsList: action.payload
      };
    case planetsActionTypes.FETCH_PLANETS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case planetsActionTypes.ADD_PLANET:
      return {
        ...state,
        planetsSelected: [...state.planetsSelected, action.payload]
      };
    case planetsActionTypes.REMOVE_PLANET:
      return {
        ...state,
        planetsSelected: state.planetsSelected.filter(
          planet => planet.name !== action.payload.name
        )
      };

    default:
      return state;
  }
};

export default planetsReducer;
