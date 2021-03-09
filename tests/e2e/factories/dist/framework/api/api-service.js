"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A structured response from the API.
 */
var APIResponse = /** @class */ (function () {
    function APIResponse(status, headers, data) {
        this.status = status;
        this.headers = headers;
        this.data = data;
    }
    return APIResponse;
}());
exports.APIResponse = APIResponse;
/**
 * A structured error from the API.
 */
var APIError = /** @class */ (function () {
    function APIError(code, message, data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
    return APIError;
}());
exports.APIError = APIError;
/**
 * Checks whether or not an APIResponse contains an error.
 *
 * @param {APIResponse} response The response to evaluate.
 */
function isAPIError(response) {
    return response.status < 200 || response.status >= 400;
}
exports.isAPIError = isAPIError;
