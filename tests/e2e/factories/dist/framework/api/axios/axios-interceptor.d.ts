import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
/**
 * A base class for encapsulating the start and stop functionality required by all axios interceptors.
 */
export declare abstract class AxiosInterceptor {
    private readonly activeInterceptors;
    /**
     * Starts intercepting requests and responses.
     *
     * @param {AxiosInstance} client The client to start intercepting the requests/responses of.
     */
    start(client: AxiosInstance): void;
    /**
     * Stops intercepting requests and responses.
     *
     * @param {AxiosInstance} client The client to stop intercepting the requests/responses of.
     */
    stop(client: AxiosInstance): void;
    /**
     * An interceptor method for handling requests before they are made to the server.
     *
     * @param {AxiosRequestConfig} config The axios request options.
     */
    protected handleRequest(config: AxiosRequestConfig): AxiosRequestConfig;
    /**
     * An interceptor method for handling successful responses.
     *
     * @param {AxiosResponse} response The response from the axios client.
     */
    protected onResponseSuccess(response: AxiosResponse): any;
    /**
     * An interceptor method for handling response failures.
     *
     * @param {*} error The error that occurred.
     */
    protected onResponseRejected(error: any): any;
}
