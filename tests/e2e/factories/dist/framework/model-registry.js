"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The types of adapters that can be stored in the registry.
 *
 * @typedef AdapterTypes
 * @property {string} API      "api"
 * @property {string} Custom   "custom"
 */
var AdapterTypes;
(function (AdapterTypes) {
    AdapterTypes["API"] = "api";
    AdapterTypes["Custom"] = "custom";
})(AdapterTypes = exports.AdapterTypes || (exports.AdapterTypes = {}));
/**
 * A registry that allows for us to easily manage all of our factories and related state.
 */
var ModelRegistry = /** @class */ (function () {
    function ModelRegistry() {
        this.factories = {};
        this.adapters = {
            api: {},
            custom: {},
        };
    }
    /**
     * Registers a factory for the class.
     *
     * @param {Function}     modelClass The class of model we're registering the factory for.
     * @param {ModelFactory} factory The factory that we're registering.
     */
    ModelRegistry.prototype.registerFactory = function (modelClass, factory) {
        if (this.factories.hasOwnProperty(modelClass.name)) {
            throw new Error('A factory of this type has already been registered for the model class.');
        }
        this.factories[modelClass.name] = factory;
    };
    /**
     * Fetches a factory that was registered for the class.
     *
     * @param {Function} modelClass The class of model for the factory we're fetching.
     */
    ModelRegistry.prototype.getFactory = function (modelClass) {
        if (this.factories.hasOwnProperty(modelClass.name)) {
            return this.factories[modelClass.name];
        }
        return null;
    };
    /**
     * Registers an adapter for the class.
     *
     * @param {Function}     modelClass The class of model that we're registering the adapter for.
     * @param {AdapterTypes} type The type of adapter that we're registering.
     * @param {Adapter}      adapter The adapter that we're registering.
     */
    ModelRegistry.prototype.registerAdapter = function (modelClass, type, adapter) {
        if (this.adapters[type].hasOwnProperty(modelClass.name)) {
            throw new Error('An adapter of this type has already been registered for the model class.');
        }
        this.adapters[type][modelClass.name] = adapter;
    };
    /**
     * Fetches an adapter registered for the class.
     *
     * @param {Function}     modelClass The class of the model for the adapter we're fetching.
     * @param {AdapterTypes} type The type of adapter we're fetching.
     */
    ModelRegistry.prototype.getAdapter = function (modelClass, type) {
        if (this.adapters[type].hasOwnProperty(modelClass.name)) {
            return this.adapters[type][modelClass.name];
        }
        return null;
    };
    /**
     * Fetches all of the adapters of a given type from the registry.
     *
     * @param {AdapterTypes} type The type of adapters to fetch.
     */
    ModelRegistry.prototype.getAdapters = function (type) {
        return Object.values(this.adapters[type]);
    };
    /**
     * Changes the adapter a factory is using.
     *
     * @param {Function} modelClass The class of the model factory we're changing.
     * @param {AdapterTypes} type The type of adapter to set.
     */
    ModelRegistry.prototype.changeFactoryAdapter = function (modelClass, type) {
        var factory = this.getFactory(modelClass);
        if (!factory) {
            throw new Error('No factory defined for this model class.');
        }
        var adapter = this.getAdapter(modelClass, type);
        if (!adapter) {
            throw new Error('No adapter of this type registered for this model class.');
        }
        factory.setAdapter(adapter);
    };
    /**
     * Changes the adapters of all factories to the given type or null if one is not registered for that type.
     *
     * @param {AdapterTypes} type The type of adapter to set.
     */
    ModelRegistry.prototype.changeAllFactoryAdapters = function (type) {
        for (var key in this.factories) {
            this.factories[key].setAdapter(this.adapters[type][key] || null);
        }
    };
    return ModelRegistry;
}());
exports.ModelRegistry = ModelRegistry;
