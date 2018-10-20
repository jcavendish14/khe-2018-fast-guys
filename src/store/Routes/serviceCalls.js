import axios from 'axios'

export class RoutesService {
    static getNumberRoutes() {
        return axios.get('http://localhost:5000/numberOfRoutes',
            { 
                headers: { 
                    'crossDomain': true
                }
            }).then(res => res.data);
    }

    static getRouteById(routeId){
        return axios.get(`http://localhost:5000/getRoute/${routeId}`,
            { 
                headers: { 
                    'crossDomain': true
                }
            }).then(res => res.data);
    }

    static getFileByType(routeId, type){
        return axios.get(`http://localhost:5000/getRoute/${routeId}?type=${type}`,
            {
                headers: { 
                    'crossDomain': true
                } 
            }).then(res => res.data);
    }

    static getRoutePage(pageNumber, pageLength){
        return axios.get(`http://localhost:5000/getRoute?offset=${pageNumber}&length=${pageLength}`,
            {
                headers: { 
                    'crossDomain': true
                } 
            }).then(res => res.data);
    }
}