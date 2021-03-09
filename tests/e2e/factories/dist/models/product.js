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
var model_1 = require("../framework/model");
/**
 * The base class for all product types.
 */
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(partial) {
        if (partial === void 0) { partial = {}; }
        var _this = _super.call(this, partial) || this;
        _this.name = '';
        _this.regularPrice = '';
        Object.assign(_this, partial);
        return _this;
    }
    return Product;
}(model_1.Model));
exports.Product = Product;
