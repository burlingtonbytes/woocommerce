import { Adapter } from './adapter';
import { Model } from './model';
import { ModelFactory } from './model-factory';
/**
 * The types of adapters that can be stored in the registry.
 *
 * @typedef AdapterTypes
 * @property {string} API      "api"
 * @property {string} Custom   "custom"
 */
export declare enum AdapterTypes {
    API = "api",
    Custom = "custom"
}
/**
 * A registry that allows for us to easily manage all of our factories and related state.
 */
export declare class ModelRegistry {
    private readonly factories;
    private readonly adapters;
    /**
     * Registers a factory for the class.
     *
     * @param {Function}     modelClass The class of model we're registering the factory for.
     * @param {ModelFactory} factory The factory that we're registering.
     */
    registerFactory<T extends Model>(modelClass: new () => T, factory: ModelFactory<T>): void;
    /**
     * Fetches a factory that was registered for the class.
     *
     * @param {Function} modelClass The class of model for the factory we're fetching.
     */
    getFactory<T extends Model>(modelClass: new () => T): ModelFactory<T> | null;
    /**
     * Registers an adapter for the class.
     *
     * @param {Function}     modelClass The class of model that we're registering the adapter for.
     * @param {AdapterTypes} type The type of adapter that we're registering.
     * @param {Adapter}      adapter The adapter that we're registering.
     */
    registerAdapter<T extends Model>(modelClass: new () => T, type: AdapterTypes, adapter: Adapter<T>): void;
    /**
     * Fetches an adapter registered for the class.
     *
     * @param {Function}     modelClass The class of the model for the adapter we're fetching.
     * @param {AdapterTypes} type The type of adapter we're fetching.
     */
    getAdapter<T extends Model>(modelClass: new () => T, type: AdapterTypes): Adapter<T> | null;
    /**
     * Fetches all of the adapters of a given type from the registry.
     *
     * @param {AdapterTypes} type The type of adapters to fetch.
     */
    getAdapters(type: AdapterTypes): Adapter<any>[];
    /**
     * Changes the adapter a factory is using.
     *
     * @param {Function} modelClass The class of the model factory we're changing.
     * @param {AdapterTypes} type The type of adapter to set.
     */
    changeFactoryAdapter<T extends Model>(modelClass: new () => T, type: AdapterTypes): void;
    /**
     * Changes the adapters of all factories to the given type or null if one is not registered for that type.
     *
     * @param {AdapterTypes} type The type of adapter to set.
     */
    changeAllFactoryAdapters(type: AdapterTypes): void;
}
