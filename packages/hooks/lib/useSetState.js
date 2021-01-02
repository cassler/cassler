"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react_1.useState(initialState), state = _a[0], set = _a[1];
    var setState = react_1.useCallback(function (patch) {
        set(function (prevState) { return (tslib_1.__assign(tslib_1.__assign({}, prevState), (patch instanceof Function ? patch(prevState) : patch))); });
    }, [set]);
    return [state, setState];
};
exports.default = useSetState;
