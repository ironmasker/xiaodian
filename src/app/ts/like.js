"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(_count) {
        this._count = _count;
        this._selected = false;
    }
    Object.defineProperty(Like.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    Like.prototype.like = function () {
        this._selected = !this._selected;
        this._count += this._selected ? 1 : -1;
    };
    return Like;
}());
exports.Like = Like;
