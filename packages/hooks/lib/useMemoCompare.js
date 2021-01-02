"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMemoCompare = void 0;
var react_1 = require("react");
function useMemoCompare(next, compare) {
    // Ref for storing previous value
    var previousRef = react_1.useRef();
    var previous = previousRef.current;
    // Pass previous and next value to compare function
    // to determine whether to consider them equal.
    var isEqual = compare(previous, next);
    // If not equal update previousRef to next value.
    // We only update if not equal so that this hook continues to return
    // the same old value if compare keeps returning true.
    react_1.useEffect(function () {
        if (!isEqual) {
            previousRef.current = next;
        }
    });
    // Finally, if equal then return the previous value
    return isEqual ? previous : next;
}
exports.useMemoCompare = useMemoCompare;
