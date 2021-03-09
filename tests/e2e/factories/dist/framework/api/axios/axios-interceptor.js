"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A base class for encapsulating the start and stop functionality required by all axios interceptors.
 */
var AxiosInterceptor = /** @class */ (function () {
    function AxiosInterceptor() {
        this.activeInterceptors = [];
    }
    /**
     * Starts intercepting requests and responses.
     *
     * @param {AxiosInstance} client The client to start intercepting the requests/responses of.
     */
    AxiosInterceptor.prototype.start = function (client) {
        var _this = this;
        var requestInterceptorID = client.interceptors.request.use(function (response) { return _this.handleRequest(response); });
        var responseInterceptorID = client.interceptors.response.use(function (response) { return _this.onResponseSuccess(response); }, function (error) { return _this.onResponseRejected(error); });
        this.activeInterceptors.push({ client: client, requestInterceptorID: requestInterceptorID, responseInterceptorID: responseInterceptorID });
    };
    /**
     * Stops intercepting requests and responses.
     *
     * @param {AxiosInstance} client The client to stop intercepting the requests/responses of.
     */
    AxiosInterceptor.prototype.stop = function (client) {
        for (var i = this.activeInterceptors.length - 1; i >= 0; --i) {
            var active = this.activeInterceptors[i];
            if (client === active.client) {
                client.interceptors.request.eject(active.requestInterceptorID);
                client.interceptors.response.eject(active.responseInterceptorID);
                this.activeInterceptors.splice(i, 1);
            }
        }
    };
    /**
     * An interceptor method for handling requests before they are made to the server.
     *
     * @param {AxiosRequestConfig} config The axios request options.
     */
    AxiosInterceptor.prototype.handleRequest = function (config) {
        return config;
    };
    /**
     * An interceptor method for handling successful responses.
     *
     * @param {AxiosResponse} response The response from the axios client.
     */
    AxiosInterceptor.prototype.onResponseSuccess = function (response) {
        return response;
    };
    /**
     * An interceptor method for handling response failures.
     *
     * @param {*} error The error that occurred.
     */
    AxiosInterceptor.prototype.onResponseRejected = function (error) {
        return error;
    };
    return AxiosInterceptor;
}());
exports.AxiosInterceptor = AxiosInterceptor;
