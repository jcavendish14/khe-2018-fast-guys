import { createSelector } from 'reselect';

const routesSelector = state => state.routes;
export const numOfRoutesSelector = createSelector(routesSelector, routes => routes.numOfRoutes);
export const currentPageSelector = createSelector(routesSelector, routes => routes.currentPage);
export const routesByPageSelector = createSelector(routesSelector, routes => routes.routes);
export const routeSelector = createSelector(routesSelector, routes => routes.routeObj);
export const routeIsFetchingSelector = createSelector(routesSelector, routes => routes.isFetching || routes.isFetchingRoutes);

export const routesOnSelectedPageSelector = createSelector(
    [currentPageSelector, routesByPageSelector],
    (currentPage, routes) => {
        const selectedRoutes = routes.filter(route => 
            route.pageNumber === currentPage
        )
        return selectedRoutes.length > 0 ? selectedRoutes[0].pageRoutes : [];
    }
)

export const loadedPagesSelector = createSelector(
    routesByPageSelector,
    routes => {
        return routes.map(route => route.pageNumber);
    }
)