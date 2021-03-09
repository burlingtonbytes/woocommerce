"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A base class for all models.
 */
var Model = /** @class */ (function () {
    function Model(partial) {
        if (partial === void 0) { partial = {}; }
        this._id = 0;
        Object.assign(this, partial);
    }
    Object.defineProperty(Model.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Model.prototype.setID = function (id) {
        this._id = id;
    };
    return Model;
}());
exports.Model = Model;
