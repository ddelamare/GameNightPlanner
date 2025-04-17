import axios, { AxiosInstance } from 'axios';
export abstract class ClientBuilder {
    public static getClient() : AxiosInstance {
        var client = axios.create({
            baseURL: 'http://127.0.0.1:3000',
            withCredentials: true,
            headers: {'Authorization': 'foobar'}
        });

        client.interceptors.request.use(function (config) {
            // Do something before request is sent
            //config.headers.Authorization = "userid:1"
            console.log(config);
            return config;
          }, function (error) {
            // Do something with request error
            return Promise.reject(error);
          })


        return client;
    }
}