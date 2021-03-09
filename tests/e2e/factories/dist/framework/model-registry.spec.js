"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_registry_1 = require("./model-registry");
var model_factory_1 = require("./model-factory");
var api_adapter_1 = require("./api/api-adapter");
var simple_product_1 = require("../models/simple-product");
describe('ModelRegistry', function () {
    var factoryRegistry;
    beforeEach(function () {
        factoryRegistry = new model_registry_1.ModelRegistry();
    });
    it('should register factories once', function () {
        var factory = model_factory_1.ModelFactory.define(function (_a) {
            var params = _a.params;
            return new simple_product_1.SimpleProduct(params);
        });
        expect(factoryRegistry.getFactory(simple_product_1.SimpleProduct)).toBeNull();
        factoryRegistry.registerFactory(simple_product_1.SimpleProduct, factory);
        expect(function () { return factoryRegistry.registerFactory(simple_product_1.SimpleProduct, factory); })
            .toThrowError(/already been registered/);
        var loaded = factoryRegistry.getFactory(simple_product_1.SimpleProduct);
        expect(loaded).toBe(factory);
    });
    it('should register adapters once', function () {
        var adapter = new api_adapter_1.APIAdapter('', function (model) { return model; });
        expect(factoryRegistry.getAdapter(simple_product_1.SimpleProduct, model_registry_1.AdapterTypes.API)).toBeNull();
        factoryRegistry.registerAdapter(simple_product_1.SimpleProduct, model_registry_1.AdapterTypes.API, adapter);
        expect(function () { return factoryRegistry.registerAdapter(simple_product_1.SimpleProduct, model_registry_1.AdapterTypes.API, adapter); })
            .toThrowError(/already been registered/);
        var loaded = factoryRegistry.getAdapter(simple_product_1.SimpleProduct, model_registry_1.AdapterTypes.API);
        expect(loaded).toBe(adapter);
    });
});
