import {
  ROUTES_REQUEST, ROUTES_SUCCESS, ROUTES_ERROR,
  NUM_OF_ROUTES_REQUEST, NUM_OF_ROUTES_SUCCESS, NUM_OF_ROUTES_ERROR
} from './actionTypes';

const initialState = {
  isFetching: false,
  numOfRoutes: undefined,
  routes: []
};

export function routes(state = initialState, action) {
  switch (action.type) {
    case ROUTES_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ROUTES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        routes: state.routes.concat(action.payload)
      };
    case ROUTES_ERROR:
      return {
        ...state,
        isFetching: false
      };
      case NUM_OF_ROUTES_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case NUM_OF_ROUTES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        numOfRoutes: action.payload.numberRoutes
      };
    case NUM_OF_ROUTES_ERROR:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}

export default routes;