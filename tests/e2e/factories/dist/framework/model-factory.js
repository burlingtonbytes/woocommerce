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
var fishery_1 = require("fishery");
/**
 * A factory that can be used to create models using an adapter.
 */
var ModelFactory = /** @class */ (function (_super) {
    __extends(ModelFactory, _super);
    function ModelFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.adapter = null;
        return _this;
    }
    /**
     * Sets the adapter that the factory will use to create models.
     *
     * @param {Adapter|null} adapter
     */
    ModelFactory.prototype.setAdapter = function (adapter) {
        this.adapter = adapter;
    };
    /**
     * Create an object using your factory
     *
     * @param {DeepPartial}  params The parameters that should populate the object.
     * @param {BuildOptions} options The options to be used in the builder.
     * @return {Promise} Resolves to the created model.
     */
    ModelFactory.prototype.create = function (params, options) {
        if (!this.adapter) {
            throw new Error('The factory has no adapter to create using.');
        }
        var model = this.build(params, options);
        return this.adapter.create(model);
    };
    /**
     * Create an array of objects using your factory
     *
     * @param {number}       number The number of models to create.
     * @param {DeepPartial}  params The parameters that should populate the object.
     * @param {BuildOptions} options The options to be used in the builder.
     * @return {Promise} Resolves to the created model.
     */
    ModelFactory.prototype.createList = function (number, params, options) {
        if (!this.adapter) {
            throw new Error('The factory has no adapter to create using.');
        }
        var model = this.buildList(number, params, options);
        return this.adapter.create(model);
    };
    return ModelFactory;
}(fishery_1.Factory));
exports.ModelFactory = ModelFactory;
