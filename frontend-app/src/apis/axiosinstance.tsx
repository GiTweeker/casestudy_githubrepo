import axios from 'axios';
import * as promise from 'promise';
import {AxiosResponse,AxiosRequestConfig,AxiosError} from 'axios'

const  axiosInstance = axios.create();


axiosInstance.interceptors.request.use((config:AxiosRequestConfig) =>{
    // Do something before request is sent
    return config;
},(error) =>{
    // Do something with request error
    return promise.reject(error as AxiosError);
});

axiosInstance.interceptors.response.use((response : AxiosResponse)=> {
    return response;
},(error) =>{

    // Do something with response error
    console.log("err " + error);
    return promise.reject(error as AxiosError);
});
export default axiosInstance;
