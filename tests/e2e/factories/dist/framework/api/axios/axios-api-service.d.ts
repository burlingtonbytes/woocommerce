import { AxiosRequestConfig } from 'axios';
import { APIResponse, APIService } from '../api-service';
import { AxiosInterceptor } from './axios-interceptor';
/**
 * An API service implementation that uses Axios to make requests to the WordPress API.
 */
export declare class AxiosAPIService implements APIService {
    private readonly client;
    private readonly interceptors;
    constructor(config: AxiosRequestConfig, interceptors?: AxiosInterceptor[]);
    /**
     * Creates a new Axios API Service using OAuth 1.0a one-legged authentication.
     *
     * @param {string} apiURL The base URL for the API requests to be sent.
     * @param {string} consumerKey The OAuth consumer key.
     * @param {string} consumerSecret The OAuth consumer secret.
     * @return {AxiosAPIService} The created service.
     */
    static createUsingOAuth(apiURL: string, consumerKey: string, consumerSecret: string): AxiosAPIService;
    /**
     * Creates a new Axios API Service using basic authentication.
     *
     * @param {string} apiURL The base URL for the API requests to be sent.
     * @param {string} username The username for authentication.
     * @param {string} password The password for authentication.
     * @return {AxiosAPIService} The created service.
     */
    static createUsingBasicAuth(apiURL: string, username: string, password: string): AxiosAPIService;
    /**
     * Performs a GET request against the WordPress API.
     *
     * @param {string} endpoint The API endpoint we should query.
     * @param {*}      params Any parameters that should be passed in the request.
     * @return {Promise} Resolves to an APIResponse and throws an APIResponse containing an APIError.
     */
    get<T>(endpoint: string, params?: any): Promise<APIResponse<T>>;
    /**
     * Performs a POST request against the WordPress API.
     *
     * @param {string} endpoint The API endpoint we should query.
     * @param {*}      data Any parameters that should be passed in the request.
     * @return {Promise} Resolves to an APIResponse and throws an APIResponse containing an APIError.
     */
    post<T>(endpoint: string, data?: any): Promise<APIResponse<T>>;
    /**
     * Performs a PUT request against the WordPress API.
     *
     * @param {string} endpoint The API endpoint we should query.
     * @param {*}      data Any parameters that should be passed in the request.
     * @return {Promise} Resolves to an APIResponse and throws an APIResponse containing an APIError.
     */
    put<T>(endpoint: string, data?: any): Promise<APIResponse<T>>;
    /**
     * Performs a PATCH request against the WordPress API.
     *
     * @param {string} endpoint The API endpoint we should query.
     * @param {*}      data Any parameters that should be passed in the request.
     * @return {Promise} Resolves to an APIResponse and throws an APIResponse containing an APIError.
     */
    patch<T>(endpoint: string, data?: any): Promise<APIResponse<T>>;
    /**
     * Performs a DELETE request against the WordPress API.
     *
     * @param {string} endpoint The API endpoint we should query.
     * @param {*}      data Any parameters that should be passed in the request.
     * @return {Promise} Resolves to an APIResponse and throws an APIResponse containing an APIError.
     */
    delete<T>(endpoint: string, data?: any): Promise<APIResponse<T>>;
}
