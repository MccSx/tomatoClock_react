import axios from 'axios'

const appid = 'PfSRyofCHkyNZRVX38yhAeDJ'
const appSecret = 'HnTQg3QqR8SqU1KRtvZRsVtR'

const instance = axios.create({
    baseURL: 'https://gp-server.hunger-valley.com',
    timeout: 1000,
    headers: {
        't-app-id': appid,
        't-app-secret': appSecret
    }
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const myToken = localStorage.getItem('x-token')
    if (myToken) {
        config.headers['x-token'] = myToken
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.headers['x-token']) {
        localStorage.setItem('x-token', response.headers['x-token'])
    }
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default instance