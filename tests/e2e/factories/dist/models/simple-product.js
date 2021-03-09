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
var product_1 = require("./product");
var model_registry_1 = require("../framework/model-registry");
var model_factory_1 = require("../framework/model-factory");
var api_adapter_1 = require("../framework/api/api-adapter");
var en_1 = __importDefault(require("faker/locale/en"));
var SimpleProduct = /** @class */ (function (_super) {
    __extends(SimpleProduct, _super);
    function SimpleProduct(partial) {
        if (partial === void 0) { partial = {}; }
        var _this = _super.call(this, partial) || this;
        Object.assign(_this, partial);
        return _this;
    }
    return SimpleProduct;
}(product_1.Product));
exports.SimpleProduct = SimpleProduct;
/**
 * Registers the simple product factory and adapters.
 *
 * @param {ModelRegistry} registry The registry to hold the model reference.
 */
function registerSimpleProduct(registry) {
    if (null !== registry.getFactory(SimpleProduct)) {
        return;
    }
    var factory = model_factory_1.ModelFactory.define(function (_a) {
        var params = _a.params;
        var _b, _c;
        return new SimpleProduct({
            name: (_b = params.name) !== null && _b !== void 0 ? _b : en_1.default.commerce.productName(),
            regularPrice: (_c = params.regularPrice) !== null && _c !== void 0 ? _c : en_1.default.commerce.price(),
        });
    });
    registry.registerFactory(SimpleProduct, factory);
    var apiAdapter = new api_adapter_1.APIAdapter('/wc/v3/products', function (model) {
        return {
            type: 'simple',
            name: model.name,
            regular_price: model.regularPrice,
        };
    });
    registry.registerAdapter(SimpleProduct, model_registry_1.AdapterTypes.API, apiAdapter);
}
exports.registerSimpleProduct = registerSimpleProduct;
