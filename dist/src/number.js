"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decimal = exports.integer = void 0;
/**
 * Function that returns a random integer
 * @param config object containing the configuration, min (defaults to 0) and max (default to 10)
 */
var integer = function (config) {
    var _a, _b;
    var min = (_a = config === null || config === void 0 ? void 0 : config.min) !== null && _a !== void 0 ? _a : 0;
    var max = ((_b = config === null || config === void 0 ? void 0 : config.max) !== null && _b !== void 0 ? _b : 10) + 1 - min - Number.EPSILON;
    return min + Math.floor(Math.random() * max);
};
exports.integer = integer;
/**
 * Function that returns a random decimal
 * @param config object containing the configuration, min (defaults to 0), max (defaults to 10) and decimalPlaces (defaults to 2)
 */
var decimal = function (config) {
    var _a, _b, _c;
    var decimalPlaces = (_a = config === null || config === void 0 ? void 0 : config.decimalPlaces) !== null && _a !== void 0 ? _a : 2;
    var tenPow = Math.pow(10, decimalPlaces);
    var min = ((_b = config === null || config === void 0 ? void 0 : config.min) !== null && _b !== void 0 ? _b : 0) * tenPow;
    var max = ((_c = config === null || config === void 0 ? void 0 : config.max) !== null && _c !== void 0 ? _c : 10) * tenPow;
    return exports.integer({ min: min, max: max }) / tenPow;
};
exports.decimal = decimal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL251bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7O0dBR0c7QUFDSSxJQUFNLE9BQU8sR0FBRyxVQUFDLE1BQTZCOztJQUNwRCxJQUFNLEdBQUcsU0FBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsR0FBRyxtQ0FBSSxDQUFDLENBQUE7SUFDNUIsSUFBTSxHQUFHLEdBQUcsT0FBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsR0FBRyxtQ0FBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUE7SUFDMUQsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7QUFDN0MsQ0FBQyxDQUFBO0FBSlksUUFBQSxPQUFPLFdBSW5CO0FBRUQ7OztHQUdHO0FBQ0ksSUFBTSxPQUFPLEdBQUcsVUFBQyxNQUE2Qjs7SUFDcEQsSUFBTSxhQUFhLFNBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGFBQWEsbUNBQUksQ0FBQyxDQUFBO0lBQ2hELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQzFDLElBQU0sR0FBRyxHQUFHLE9BQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLEdBQUcsbUNBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFBO0lBQ3ZDLElBQU0sR0FBRyxHQUFHLE9BQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLEdBQUcsbUNBQUksRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFBO0lBQ3hDLE9BQU8sZUFBTyxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtBQUN0QyxDQUFDLENBQUE7QUFOWSxRQUFBLE9BQU8sV0FNbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyXG4gKiBAcGFyYW0gY29uZmlnIG9iamVjdCBjb250YWluaW5nIHRoZSBjb25maWd1cmF0aW9uLCBtaW4gKGRlZmF1bHRzIHRvIDApIGFuZCBtYXggKGRlZmF1bHQgdG8gMTApXG4gKi9cbmV4cG9ydCBjb25zdCBpbnRlZ2VyID0gKGNvbmZpZz86IFJhbmRvbS5JbnRlZ2VyQ29uZmlnKSA9PiB7XG5cdGNvbnN0IG1pbiA9IGNvbmZpZz8ubWluID8/IDBcblx0Y29uc3QgbWF4ID0gKGNvbmZpZz8ubWF4ID8/IDEwKSArIDEgLSBtaW4gLSBOdW1iZXIuRVBTSUxPTlxuXHRyZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHJhbmRvbSBkZWNpbWFsXG4gKiBAcGFyYW0gY29uZmlnIG9iamVjdCBjb250YWluaW5nIHRoZSBjb25maWd1cmF0aW9uLCBtaW4gKGRlZmF1bHRzIHRvIDApLCBtYXggKGRlZmF1bHRzIHRvIDEwKSBhbmQgZGVjaW1hbFBsYWNlcyAoZGVmYXVsdHMgdG8gMilcbiAqL1xuZXhwb3J0IGNvbnN0IGRlY2ltYWwgPSAoY29uZmlnPzogUmFuZG9tLkRlY2ltYWxDb25maWcpID0+IHtcblx0Y29uc3QgZGVjaW1hbFBsYWNlcyA9IGNvbmZpZz8uZGVjaW1hbFBsYWNlcyA/PyAyXG5cdGNvbnN0IHRlblBvdyA9IE1hdGgucG93KDEwLCBkZWNpbWFsUGxhY2VzKVxuXHRjb25zdCBtaW4gPSAoY29uZmlnPy5taW4gPz8gMCkgKiB0ZW5Qb3dcblx0Y29uc3QgbWF4ID0gKGNvbmZpZz8ubWF4ID8/IDEwKSAqIHRlblBvd1xuXHRyZXR1cm4gaW50ZWdlcih7IG1pbiwgbWF4IH0pIC8gdGVuUG93XG59XG4iXX0=