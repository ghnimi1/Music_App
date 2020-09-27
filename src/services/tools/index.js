import axios from 'axios';
export const Content_Type = "application/json";
export const ACCEPT = 'application/json';
export const BASE_URL = 'https://api.yourchores.me/';

const config = {
    baseURL:BASE_URL,
    timeout:30000
}
export const authInstance = axios.create(config);

authInstance.interceptors.request.use(
    config => {
        config.headers.common['ACCEPT'] = ACCEPT;
        config.headers.common['Content_Type'] = Content_Type;
        return config
    },
    error => {
        console.log('error', error);
    }
)

export const globalInstance = axios.create(config);
var token = localStorage.getItem("TOKEN");

globalInstance.interceptors.request.use(
    config => {
        config.headers.common['ACCEPT'] = ACCEPT;
        config.headers.common['Content_Type'] = Content_Type;       
         config.headers.common["Authorization"]= `Bearer ${token}`
        console.log('conf', config);

        return config
    },
    error => {
        console.log('error', error);
    }
)

export default {
    authInstance,
    globalInstance
}