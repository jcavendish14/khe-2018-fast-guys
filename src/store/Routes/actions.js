import {
    ROUTES_REQUEST, ROUTES_SUCCESS, ROUTES_ERROR,
    NUM_OF_ROUTES_REQUEST, NUM_OF_ROUTES_SUCCESS, NUM_OF_ROUTES_ERROR
} from './actionTypes';
import { mockResponse, mockResponseNum } from './mocks';

export function routesRequest() {
    return {
        type: ROUTES_REQUEST
    };
}
  
export function routesSuccess(response) {
    return {
      type: ROUTES_SUCCESS,
      payload: response
    };
}

export function routesError(error) {
    return {
        type: ROUTES_ERROR,
        payload: error
    };
}

export function getRoutes(pageNumber) {
    return dispatch => {
        dispatch(routesRequest());
        dispatch(routesSuccess({pageNumber: pageNumber, pageRoutes: mockResponse}));
    }
}

export function numOfRoutesRequest() {
    return {
        type: NUM_OF_ROUTES_REQUEST
    };
}
  
export function numOfRoutesSuccess(response) {
    return {
      type: NUM_OF_ROUTES_SUCCESS,
      payload: response
    };
}

export function numOfRoutesError(error) {
    return {
        type: NUM_OF_ROUTES_ERROR,
        payload: error
    };
}

export function getNumOfRoutes() {
    return dispatch => {
        dispatch(numOfRoutesRequest());
        dispatch(numOfRoutesSuccess(mockResponseNum));
    }
}