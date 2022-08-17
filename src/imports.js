/*
@Authors Varrience
@Version 0.01
@About needed functions that could be used in any file in these standard libraries
*/
// Flattens an array by a specified amount 
Object.defineProperty(Array.prototype, 'flat', {
    value: function (depth) {
        if (depth === void 0) { depth = 1; }
        var flatten = function (arr, depth) {
            return depth < 1 ? arr.slice() : arr.reduce(function (acc, val) {
                return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
            }, []);
        };
        return flatten(this, depth);
    }
});
