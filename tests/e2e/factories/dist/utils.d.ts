import { ModelRegistry } from './framework/model-registry';
/**
 * Initializes all of the APIAdapters with a client to communicate with the API.
 *
 * @param {ModelRegistry} registry The model registry that we want to initialize.
 * @param {string}        apiURL The base URL for the API.
 * @param {string}        consumerKey The OAuth consumer key for the API service.
 * @param {string}        consumerSecret The OAuth consumer secret for the API service.
 */
export declare function initializeUsingOAuth(registry: ModelRegistry, apiURL: string, consumerKey: string, consumerSecret: string): void;
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
export declare function initializeUsingBasicAuth(registry: ModelRegistry, apiURL: string, username: string, password: string): void;
