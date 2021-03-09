import { AxiosRequestConfig } from 'axios';
import { AxiosInterceptor } from './axios-interceptor';
/**
 * A utility class for managing the lifecycle of an authentication interceptor.
 */
export declare class AxiosOAuthInterceptor extends AxiosInterceptor {
    private oauth;
    constructor(consumerKey: string, consumerSecret: string);
    /**
     * Adds WooCommerce API authentication details to the outgoing request.
     *
     * @param {AxiosRequestConfig} request The request that was intercepted.
     * @return {AxiosRequestConfig} The request with the additional authorization headers.
     */
    protected handleRequest(request: AxiosRequestConfig): AxiosRequestConfig;
}
