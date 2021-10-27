import { apiWidgetsUrl } from './ApiConstants';

export const fetchApiData = (onSuccess) => {
    return fetch(apiWidgetsUrl)
        .then((response) => response.json())
        .then((data) => onSuccess(data))
        .catch((error) => {
            console.log("Something Went Wrong to fetch Api response");
        });
}