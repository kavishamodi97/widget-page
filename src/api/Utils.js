import { apiWidgetsUrl } from './ApiConstants';

export const fetchApiData = () => {
    return fetch(apiWidgetsUrl)
        .then((response) => response.json())
        .then((data) => console.log(data));
}