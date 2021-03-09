"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var axios_oauth_interceptor_1 = require("./axios-oauth-interceptor");
var axios_response_interceptor_1 = require("./axios-response-interceptor");
/**
 * An API service implementation that uses Axios to make requests to the WordPress API.
 */
var AxiosAPIService = /** @class */ (function () {
    function AxiosAPIService(config, interceptors) {
        if (interceptors === void 0) { interceptors = []; }
        this.client = axios_1.default.create(config);
        this.interceptors = interceptors;
        for (var _i = 0, _a = this.interceptors; _i < _a.length; _i++) {
            var interceptor = _a[_i];
            interceptor.start(this.client);
        }
    }
    /**
     * Creates a new Axios API Service using OAuth 1.0a one-legged authentication.
     *
     * @param {string} apiURL The base URL for the API requests to be sent.
     * @param {string} consumerKey The OAuth consumer key.
     * @param {string} consumerSecret The OAuth consumer secret.
     * @return {AxiosAPIService} The created service.
     */
    AxiosAPIService.createUsingOAuth = function (apiURL, consumerKey, consumerSecret) {
        return new AxiosAPIService({ baseURL: apiURL }, [
            new axios_oauth_interceptor_1.AxiosOAuthInterceptor(consumerKey, consumerSecret),
            new axios_response_interceptor_1.AxiosResponseInterceptor(),
        ]);
    };
    /**
     * Creates a new Axios API Service using basic authentication.
     *
     * @param {string} apiURL The base URL for the API requests to be sent.
     * @param {string} username The username for authentication.
     * @param {string} password The password for authentication.
     * @return {AxiosAPIService} The created service.
     */
    AxiosAPIService.createUsingBasicAuth = function (apiURL, username, password) {
        return new AxiosAPIService({
            baseURL: apiURL,
            auth: { username: username, password: password },
        }, [new axios_response_interceptor_1.AxiosResponseInterceptor()]);
    };
    /**
     * Performs a GET request against the WordPress API.
     *
     * @param {string} endpoint The API endpoint we should query.
     * @param {*}      params Any parameters that should be passed in the request.
     * @return {Promise} Resolves to an APIResponse and throws an APIResponse containing an APIError.
     */
    AxiosAPIService.prototype.get = function (endpoint, params) {
        return this.client.get(endpoint, { params: params });
    };
    /**
     * Performs a POST request against the WordPress API.
     *
     * @param {string} endpoint The API endpoint we should query.
     * @param {*}      data Any parameters that should be passed in the request.
     * @return {Promise} Resolves to an APIResponse and throws an APIResponse containing an APIError.
     */
    AxiosAPIService.prototype.post = function (endpoint, data) {
        return this.client.post(endpoint, data);
    };
    /**
     * Performs a PUT request against the WordPress API.
     *
     * @param {string} endpoint The API endpoint we should query.
     * @param {*}      data Any parameters that should be passed in the request.
     * @return {Promise} Resolves to an APIResponse and throws an APIResponse containing an APIError.
     */
    AxiosAPIService.prototype.put = function (endpoint, data) {
        return this.client.put(endpoint, data);
    };
    /**
     * Performs a PATCH request against the WordPress API.
     *
     * @param {string} endpoint The API endpoint we should query.
     * @param {*}      data Any parameters that should be passed in the request.
     * @return {Promise} Resolves to an APIResponse and throws an APIResponse containing an APIError.
     */
    AxiosAPIService.prototype.patch = function (endpoint, data) {
        return this.client.patch(endpoint, data);
    };
    /**
     * Performs a DELETE request against the WordPress API.
     *
     * @param {string} endpoint The API endpoint we should query.
     * @param {*}      data Any parameters that should be passed in the request.
     * @return {Promise} Resolves to an APIResponse and throws an APIResponse containing an APIError.
     */
    AxiosAPIService.prototype.delete = function (endpoint, data) {
        return this.client.delete(endpoint, { data: data });
    };
    return AxiosAPIService;
}());
exports.AxiosAPIService = AxiosAPIService;
