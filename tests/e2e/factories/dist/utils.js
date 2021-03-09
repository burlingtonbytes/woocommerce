"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_registry_1 = require("./framework/model-registry");
var axios_api_service_1 = require("./framework/api/axios/axios-api-service");
/**
 * Initializes all of the APIAdapters with a client to communicate with the API.
 *
 * @param {ModelRegistry} registry The model registry that we want to initialize.
 * @param {string}        apiURL The base URL for the API.
 * @param {string}        consumerKey The OAuth consumer key for the API service.
 * @param {string}        consumerSecret The OAuth consumer secret for the API service.
 */
function initializeUsingOAuth(registry, apiURL, consumerKey, consumerSecret) {
    var adapters = registry.getAdapters(model_registry_1.AdapterTypes.API);
    if (!adapters.length) {
        return;
    }
    var apiService = axios_api_service_1.AxiosAPIService.createUsingOAuth(apiURL, consumerKey, consumerSecret);
    for (var _i = 0, adapters_1 = adapters; _i < adapters_1.length; _i++) {
        var adapter = adapters_1[_i];
        adapter.setAPIService(apiService);
    }
}
exports.initializeUsingOAuth = initializeUsingOAuth;
/**
 * Initialize all of the APIAdapters with a client to communicate with the API.
 *
 *
 *
 * @param {ModelRegistry} registry The model registry that we want to initialize.
 * @param {string}        apiURL The base URL for the API.
 * @param {string}        username The username to use for authentication.
 * @param {string}        password The password to use for authentication.
 */
function initializeUsingBasicAuth(registry, apiURL, username, password) {
    var adapters = registry.getAdapters(model_registry_1.AdapterTypes.API);
    if (!adapters.length) {
        return;
    }
    var apiService = axios_api_service_1.AxiosAPIService.createUsingBasicAuth(apiURL, username, password);
    for (var _i = 0, adapters_2 = adapters; _i < adapters_2.length; _i++) {
        var adapter = adapters_2[_i];
        adapter.setAPIService(apiService);
    }
}
exports.initializeUsingBasicAuth = initializeUsingBasicAuth;
