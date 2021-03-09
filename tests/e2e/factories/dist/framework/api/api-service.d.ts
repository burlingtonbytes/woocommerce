/**
 * A structured response from the API.
 */
export declare class APIResponse<T = any> {
    readonly status: number;
    readonly headers: any;
    readonly data: T;
    constructor(status: number, headers: any, data: T);
}
/**
 * A structured error from the API.
 */
export declare class APIError {
    readonly code: string;
    readonly message: string;
    readonly data: any;
    constructor(code: string, message: string, data: any);
}
/**
 * Checks whether or not an APIResponse contains an error.
 *
 * @param {APIResponse} response The response to evaluate.
 */
export declare function isAPIError(response: APIResponse): response is APIResponse<APIError>;
/**
 * An interface for implementing services to make calls against the API.
 */
export interface APIService {
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
