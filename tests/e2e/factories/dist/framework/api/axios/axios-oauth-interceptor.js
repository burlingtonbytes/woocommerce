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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_hmac_1 = __importDefault(require("create-hmac"));
var oauth_1_0a_1 = __importDefault(require("oauth-1.0a"));
var axios_interceptor_1 = require("./axios-interceptor");
/**
 * A utility class for managing the lifecycle of an authentication interceptor.
 */
var AxiosOAuthInterceptor = /** @class */ (function (_super) {
    __extends(AxiosOAuthInterceptor, _super);
    function AxiosOAuthInterceptor(consumerKey, consumerSecret) {
        var _this = _super.call(this) || this;
        _this.oauth = new oauth_1_0a_1.default({
            consumer: {
                key: consumerKey,
                secret: consumerSecret,
            },
            signature_method: 'HMAC-SHA256',
            hash_function: function (base, key) {
                return create_hmac_1.default('sha256', key).update(base).digest('base64');
            },
        });
        return _this;
    }
    /**
     * Adds WooCommerce API authentication details to the outgoing request.
     *
     * @param {AxiosRequestConfig} request The request that was intercepted.
     * @return {AxiosRequestConfig} The request with the additional authorization headers.
     */
    AxiosOAuthInterceptor.prototype.handleRequest = function (request) {
        var url = (request.baseURL || '') + (request.url || '');
        if (url.startsWith('https')) {
            request.auth = {
                username: this.oauth.consumer.key,
                password: this.oauth.consumer.secret,
            };
        }
        else {
            request.headers.Authorization = this.oauth.toHeader(this.oauth.authorize({
                url: url,
                method: request.method,
            })).Authorization;
        }
        return request;
    };
    return AxiosOAuthInterceptor;
}(axios_interceptor_1.AxiosInterceptor));
exports.AxiosOAuthInterceptor = AxiosOAuthInterceptor;
