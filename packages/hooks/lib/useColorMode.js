"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useColorProvider = exports.ColorProvider = exports.useColorMode = exports.ColorContext = exports.Tints = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var useDarkMode_1 = tslib_1.__importDefault(require("./useDarkMode"));
var useLocalStorage_1 = tslib_1.__importDefault(require("./useLocalStorage"));
var useMedia_1 = tslib_1.__importDefault(require("./useMedia"));
exports.Tints = [
    "indigo",
    "orange",
    "teal",
    "blue",
    "grape",
    "violet",
    "yellow",
    "cyan",
    "pink",
];
exports.ColorContext = react_1.default.createContext({
    darkMode: false,
    tint: "pink",
    columns: 2,
});
var useColorMode = function (initialValue) {
    // Use whatever color is definied in the hook specifically
    var initialColor = typeof initialValue !== "undefined" ? initialValue : "blue";
    // Use our common hook to manage darkmode states
    var _a = useDarkMode_1.default(), darkMode = _a[0], setDarkMode = _a[1];
    // Use our useLocalStorage hook to persist state through a page refresh.
    // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
    var _b = useLocalStorage_1.default("localColor", initialColor), localColor = _b[0], setCurrentColor = _b[1];
    // If localColor is defined use it, otherwise fallback to default color.
    // This allows user to override OS level setting on our website.
    var currentColor = typeof localColor !== "undefined" ? localColor : initialColor;
    // Fire off effect now that we have Darkmode and colors
    react_1.useEffect(function () {
        var mode = darkMode ? "dark" : "light";
        var currentTheme = mode + "-" + currentColor;
        document.documentElement.setAttribute("data-theme", currentTheme);
    }, [darkMode, currentColor]);
    // Return currentColor state and setter
    return [
        [currentColor, setCurrentColor],
        [darkMode, setDarkMode],
    ];
};
exports.useColorMode = useColorMode;
var ColorProvider = function (props) {
    // This is a bit strange for an API because its actually layering
    // two different but interdependant hooks into a single function
    var _a = exports.useColorMode(), _b = _a[0], tint = _b[0], setColor = _b[1], _c = _a[1], darkMode = _c[0], setDarkMode = _c[1];
    // Watch our media hook to update these values easily.
    var columnCount = useMedia_1.default(
    // Media queries
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"], 
    // Column counts (relates to above media queries by array index)
    [5, 3, 2], 
    // Default column count
    1);
    return (react_1.default.createElement(exports.ColorContext.Provider, { value: {
            darkMode: darkMode,
            tint: tint,
            columns: columnCount || 0,
            setDarkMode: setDarkMode,
            setColor: setColor,
        } }, props.children));
};
exports.ColorProvider = ColorProvider;
var useColorProvider = function () { return react_1.useContext(exports.ColorContext); };
exports.useColorProvider = useColorProvider;
exports.default = exports.useColorMode;
