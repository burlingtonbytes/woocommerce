import { APIService } from './api-service';
import { Model } from '../model';
import { Adapter } from '../adapter';
/**
 * A callback for transforming models into an API request body.
 *
 * @callback APITransformerFn
 * @param {Model} model The model that we want to transform.
 * @return {*} The structured request data for the API.
 */
export declare type APITransformerFn<T extends Model> = (model: T) => any;
/**
 * A class used for creating data models using a supplied API endpoint.
 */
export declare class APIAdapter<T extends Model> implements Adapter<T> {
    private readonly endpoint;
    private readonly transformer;
    private apiService;
    constructor(endpoint: string, transformer: APITransformerFn<T>);
    /**
     * Sets the API service that the adapter should use for creation actions.
     *
     * @param {APIService|null} service The new API service for the adapter to use.
     */
    setAPIService(service: APIService | null): void;
    /**
     * Creates a model or array of models using the API service.
     *
     * @param {Model|Model[]} model The model or array of models to create.
     * @return {Promise} Resolves to the created input model or array of models.
     */
    create(model: T): Promise<T>;
    create(model: T[]): Promise<T[]>;
    /**
     * Creates a single model using the API service.
     *
     * @param {Model} model The model to create.
     * @return {Promise} Resolves to the created input model.
     */
    private createSingle;
    /**
     * Creates an array of models using the API service.
     *
     * @param {Model[]} models The array of models to create.
     * @return {Promise} Resolves to the array of created input models.
     */
    private createList;
}
