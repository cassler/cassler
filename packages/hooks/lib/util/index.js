"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDeepEqual = exports.off = exports.on = exports.isClient = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("fast-deep-equal/react"));
exports.isClient = typeof window === "object";
var on = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.addEventListener.apply(obj, args);
};
exports.on = on;
var off = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.removeEventListener.apply(obj, args);
};
exports.off = off;
exports.isDeepEqual = react_1.default;
