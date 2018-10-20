import { createSelector } from 'reselect';

const routesSelector = state => state.routes;
export const numOfRoutesSelector = createSelector(routesSelector, routes => routes.numOfRoutes);