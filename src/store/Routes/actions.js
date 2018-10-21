import {
    ROUTES_REQUEST, ROUTES_SUCCESS, ROUTES_ERROR,
    NUM_OF_ROUTES_REQUEST, NUM_OF_ROUTES_SUCCESS, NUM_OF_ROUTES_ERROR,
    ROUTES_BY_ID_REQUEST, ROUTES_BY_ID_SUCCESS, ROUTES_BY_ID_ERROR,
    FILE_BY_TYPE_REQUEST, FILE_BY_TYPE_SUCCESS, FILE_BY_TYPE_ERROR,
    GO_TO_PAGE
} from './actionTypes';
import { RoutesService } from './serviceCalls';
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

export function getRoutes(pageNumber, pageSize) {
    return dispatch => {
        dispatch(routesRequest());
        RoutesService.getRoutePage(pageNumber, pageSize)
            .then(res => {
                dispatch(routesSuccess({pageNumber: pageNumber, pageRoutes: res}));
                for (let route of res) {
                    dispatch(fileTypeRequest());
                    RoutesService.getFileByType(route.routeId, 'jpg')
                        .then(res => {
                            console.log(res);
                            dispatch(fileTypeSuccess({'routeId': route.routeId, 'snapshot':res}));
                        })
                }
            });
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
        RoutesService.getNumberRoutes()
            .then(res => {
                console.log(res);
                dispatch(numOfRoutesSuccess(res));
            });
    }
}

export function goToPage(pageNumber) {
    return {
        type: GO_TO_PAGE,
        payload: pageNumber
    }
}

export function routeIdRequest() {
    return {
        type: ROUTES_BY_ID_REQUEST
    };
}
  
export function routesIdSuccess(response) {
    return {
      type: ROUTES_BY_ID_SUCCESS,
      payload: response
    };
}

export function routesIdError(error) {
    return {
        type: ROUTES_BY_ID_ERROR,
        payload: error
    };
}

export function getRoutesId(routeId) {
    return dispatch => {
        dispatch(routesRequest());
        RoutesService.getRouteById(routeId)
            .then(res => {
                console.log(res);
                dispatch(routesIdSuccess(res));
            });
    }
}


export function fileTypeRequest() {
    return {
        type: FILE_BY_TYPE_REQUEST
    };
}
  
export function fileTypeSuccess(response) {
    return {
      type: FILE_BY_TYPE_SUCCESS,
      payload: response
    };
}

export function fileTypeError(error) {
    return {
        type: FILE_BY_TYPE_ERROR,
        payload: error
    };
}

export function getFileType(routeId, type) {
    return dispatch => {
        dispatch(routesRequest());
        RoutesService.getFileByType(routeId, type)
            .then(res => {
                console.log(res);
                dispatch(fileTypeSuccess(res));
            });
    }
}
