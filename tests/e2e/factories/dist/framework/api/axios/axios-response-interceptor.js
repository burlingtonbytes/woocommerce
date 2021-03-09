"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_service_1 = require("../api-service");
var axios_interceptor_1 = require("./axios-interceptor");
var AxiosResponseInterceptor = /** @class */ (function (_super) {
    __extends(AxiosResponseInterceptor, _super);
    function AxiosResponseInterceptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Transforms the Axios response into our API response to be consumed in a consistent manner.
     *
     * @param {AxiosResponse} response The respons ethat we need to transform.
     * @return {Promise} A promise containing the APIResponse.
     */
    AxiosResponseInterceptor.prototype.onResponseSuccess = function (response) {
        return Promise.resolve(new api_service_1.APIResponse(response.status, response.headers, response.data));
    };
    /**
     * Transforms HTTP errors into an API error if the error came from the API.
     *
     * @param {*} error The error that was caught.
     */
    AxiosResponseInterceptor.prototype.onResponseRejected = function (error) {
        // Only transform API errors.
        if (!error.response) {
            throw error;
        }
        throw new api_service_1.APIResponse(error.response.status, error.response.headers, new api_service_1.APIError(error.response.data.code, error.response.data.message, error.response.data.data));
    };
    return AxiosResponseInterceptor;
}(axios_interceptor_1.AxiosInterceptor));
exports.AxiosResponseInterceptor = AxiosResponseInterceptor;
