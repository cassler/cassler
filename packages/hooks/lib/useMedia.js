"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
/**
 *
 * @param queries
 * @param values
 * @param Example usage:
 * */
function useMedia(queries, values, defaultValue) {
    if (typeof window === "undefined") {
        return false;
    }
    // Array containing a media query list for each query
    var mediaQueryLists = queries.map(function (q) { return window.matchMedia(q); });
    // Function that gets value based on matching media query
    var getValue = function () {
        // Get index of first media query that matches
        var index = tslib_1.__spreadArrays(mediaQueryLists).findIndex(function (mql) { return mql.matches; });
        // Return related value or defaultValue if none
        return (values === null || values === void 0 ? void 0 : values[index]) || defaultValue;
    };
    // State and setter for matched value
    var _a = react_1.useState(getValue), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        // Event listener callback
        // Note: By defining getValue outside of useEffect we ensure that it has ...
        // ... current values of hook args (as this hook callback is created once on mount).
        var handler = function () { return setValue(getValue); };
        // Set a listener for each media query with above handler as callback.
        mediaQueryLists.forEach(function (mql) { return mql.addListener(handler); });
        // Remove listeners on cleanup
        return function () {
            return mediaQueryLists.forEach(function (mql) { return mql.removeListener(handler); });
        };
    }, [] // Empty array ensures effect is only run on mount and unmount
    );
    return value;
}
exports.default = useMedia;
