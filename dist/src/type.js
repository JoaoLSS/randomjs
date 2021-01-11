"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generator = exports.type = void 0;
var number_1 = require("./number");
var object_1 = require("./object");
var string_1 = require("./string");
/**
 * Random types array
 */
var types = ["string", "array", "object", "int", "decimal", "null", "undefined"];
/**
 * This function returns a string representation of a random type,
 * the values can be "string","array","object","int","decimal","null","undefined"
 */
var type = function (config) {
    var _types = (config === null || config === void 0 ? void 0 : config.exclude) ? types.filter(function (t) { var _a; return !((_a = config.exclude) === null || _a === void 0 ? void 0 : _a.includes(t)); }) : types;
    var min = 0;
    var max = _types.length - 1;
    return _types[number_1.integer({ min: min, max: max })];
};
exports.type = type;
/**
 * This function returns another function that generates random object (primitive and non-primitive)
 * @param config the configuration object
 */
var generator = function (config) { return function (t) {
    if (t === void 0) { t = exports.type({ exclude: config === null || config === void 0 ? void 0 : config.exclude }); }
    switch (t) {
        case "array":
            return object_1.array(config === null || config === void 0 ? void 0 : config.arrayConfig);
        case "decimal":
            return number_1.decimal(config === null || config === void 0 ? void 0 : config.decimalConfig);
        case "int":
            return number_1.integer(config === null || config === void 0 ? void 0 : config.integerConfig);
        case "null":
            return null;
        case "object":
            return object_1.object(config === null || config === void 0 ? void 0 : config.objectConfig);
        case "string":
            return string_1.word(config === null || config === void 0 ? void 0 : config.stringConfig);
        case "undefined":
            return undefined;
    }
}; };
exports.generator = generator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUEyQztBQUMzQyxtQ0FBd0M7QUFDeEMsbUNBQStCO0FBRS9COztHQUVHO0FBQ0gsSUFBTSxLQUFLLEdBQWtCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUE7QUFFakc7OztHQUdHO0FBQ0ksSUFBTSxJQUFJLEdBQUcsVUFBQyxNQUEwQjtJQUM5QyxJQUFNLE1BQU0sR0FBRyxDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLFlBQUssT0FBQSxRQUFDLE1BQU0sQ0FBQyxPQUFPLDBDQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQSxFQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBQzFGLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQTtJQUNiLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO0lBQzdCLE9BQU8sTUFBTSxDQUFDLGdCQUFPLENBQUMsRUFBRSxHQUFHLEtBQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUNyQyxDQUFDLENBQUE7QUFMWSxRQUFBLElBQUksUUFLaEI7QUFFRDs7O0dBR0c7QUFDSSxJQUFNLFNBQVMsR0FBRyxVQUFDLE1BQWdDLElBQUssT0FBQSxVQUFDLENBQXNDO0lBQXRDLGtCQUFBLEVBQUEsSUFBSSxZQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3JHLFFBQVEsQ0FBQyxFQUFFO1FBQ1YsS0FBSyxPQUFPO1lBQ1gsT0FBTyxjQUFLLENBQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFdBQVcsQ0FBQyxDQUFBO1FBQ2xDLEtBQUssU0FBUztZQUNiLE9BQU8sZ0JBQU8sQ0FBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsYUFBYSxDQUFDLENBQUE7UUFDdEMsS0FBSyxLQUFLO1lBQ1QsT0FBTyxnQkFBTyxDQUFDLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxhQUFhLENBQUMsQ0FBQTtRQUN0QyxLQUFLLE1BQU07WUFDVixPQUFPLElBQUksQ0FBQTtRQUNaLEtBQUssUUFBUTtZQUNaLE9BQU8sZUFBTSxDQUFDLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxZQUFZLENBQUMsQ0FBQTtRQUNwQyxLQUFLLFFBQVE7WUFDWixPQUFPLGFBQUksQ0FBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsWUFBWSxDQUFDLENBQUE7UUFDbEMsS0FBSyxXQUFXO1lBQ2YsT0FBTyxTQUFTLENBQUE7S0FDakI7QUFDRixDQUFDLEVBakI4RCxDQWlCOUQsQ0FBQTtBQWpCWSxRQUFBLFNBQVMsYUFpQnJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW50ZWdlciwgZGVjaW1hbCB9IGZyb20gXCIuL251bWJlclwiXG5pbXBvcnQgeyBvYmplY3QsIGFycmF5IH0gZnJvbSBcIi4vb2JqZWN0XCJcbmltcG9ydCB7IHdvcmQgfSBmcm9tIFwiLi9zdHJpbmdcIlxuXG4vKipcbiAqIFJhbmRvbSB0eXBlcyBhcnJheVxuICovXG5jb25zdCB0eXBlczogUmFuZG9tLlR5cGVbXSA9IFtcInN0cmluZ1wiLCBcImFycmF5XCIsIFwib2JqZWN0XCIsIFwiaW50XCIsIFwiZGVjaW1hbFwiLCBcIm51bGxcIiwgXCJ1bmRlZmluZWRcIl1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSByYW5kb20gdHlwZSxcbiAqIHRoZSB2YWx1ZXMgY2FuIGJlIFwic3RyaW5nXCIsXCJhcnJheVwiLFwib2JqZWN0XCIsXCJpbnRcIixcImRlY2ltYWxcIixcIm51bGxcIixcInVuZGVmaW5lZFwiXG4gKi9cbmV4cG9ydCBjb25zdCB0eXBlID0gKGNvbmZpZz86IFJhbmRvbS5UeXBlQ29uZmlnKTogUmFuZG9tLlR5cGUgPT4ge1xuXHRjb25zdCBfdHlwZXMgPSBjb25maWc/LmV4Y2x1ZGUgPyB0eXBlcy5maWx0ZXIoKHQpID0+ICFjb25maWcuZXhjbHVkZT8uaW5jbHVkZXModCkpIDogdHlwZXNcblx0Y29uc3QgbWluID0gMFxuXHRjb25zdCBtYXggPSBfdHlwZXMubGVuZ3RoIC0gMVxuXHRyZXR1cm4gX3R5cGVzW2ludGVnZXIoeyBtaW4sIG1heCB9KV1cbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYW5vdGhlciBmdW5jdGlvbiB0aGF0IGdlbmVyYXRlcyByYW5kb20gb2JqZWN0IChwcmltaXRpdmUgYW5kIG5vbi1wcmltaXRpdmUpXG4gKiBAcGFyYW0gY29uZmlnIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgZ2VuZXJhdG9yID0gKGNvbmZpZzogUmFuZG9tLk5vblByaW1pdHZlQ29uZmlnKSA9PiAodCA9IHR5cGUoeyBleGNsdWRlOiBjb25maWc/LmV4Y2x1ZGUgfSkpID0+IHtcblx0c3dpdGNoICh0KSB7XG5cdFx0Y2FzZSBcImFycmF5XCI6XG5cdFx0XHRyZXR1cm4gYXJyYXkoY29uZmlnPy5hcnJheUNvbmZpZylcblx0XHRjYXNlIFwiZGVjaW1hbFwiOlxuXHRcdFx0cmV0dXJuIGRlY2ltYWwoY29uZmlnPy5kZWNpbWFsQ29uZmlnKVxuXHRcdGNhc2UgXCJpbnRcIjpcblx0XHRcdHJldHVybiBpbnRlZ2VyKGNvbmZpZz8uaW50ZWdlckNvbmZpZylcblx0XHRjYXNlIFwibnVsbFwiOlxuXHRcdFx0cmV0dXJuIG51bGxcblx0XHRjYXNlIFwib2JqZWN0XCI6XG5cdFx0XHRyZXR1cm4gb2JqZWN0KGNvbmZpZz8ub2JqZWN0Q29uZmlnKVxuXHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdHJldHVybiB3b3JkKGNvbmZpZz8uc3RyaW5nQ29uZmlnKVxuXHRcdGNhc2UgXCJ1bmRlZmluZWRcIjpcblx0XHRcdHJldHVybiB1bmRlZmluZWRcblx0fVxufVxuIl19