import axios, { AxiosInstance } from 'axios';
export abstract class ClientBuilder {
    public static getClient() : AxiosInstance {
        var client = axios.create({
            baseURL: 'https://jubilant-barnacle-7v6qg79qgrp3xv6r-4000.app.github.dev',
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