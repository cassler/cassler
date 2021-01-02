"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrefersDarkMode = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var useMedia_1 = tslib_1.__importDefault(require("./useMedia"));
var useLocalStorage_1 = tslib_1.__importDefault(require("./useLocalStorage"));
function useDarkMode() {
    // Use our useLocalStorage hook to persist state through a page refresh.
    // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
    var _a = useLocalStorage_1.default("enabledState", true), enabledState = _a[0], setEnabledState = _a[1];
    // const [name, setName] = useLocalStorage<string>('name', 'Bob');
    // See if user has set a browser or OS preference for dark mode.
    // The usePrefersDarkMode hook composes a useMedia hook (see code below).
    var prefersDarkMode = usePrefersDarkMode();
    // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
    // This allows user to override OS level setting on our website.
    var enabled = typeof enabledState !== "undefined" ? enabledState : prefersDarkMode;
    // Fire off effect that add/removes dark mode class
    react_1.useEffect(function () {
        // Convert this to another hook!
        // const currentTheme = enabled ? "dark" : "light";
        // const accent = 'grape';
        // let currentAccent = `${currentTheme}-${accent}`;
        // document.documentElement.setAttribute("data-theme", currentAccent);
    }, [enabled, setEnabledState] // Only re-call effect when value changes
    );
    // Return enabled state and setter
    return [enabled, setEnabledState];
}
exports.default = useDarkMode;
// Compose our useMedia hook to detect dark mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
// Read the recipe for useMedia to learn more: usehooks.com/useMedia
function usePrefersDarkMode() {
    return useMedia_1.default(["(prefers-color-scheme: dark)"], [true], false);
}
exports.usePrefersDarkMode = usePrefersDarkMode;
