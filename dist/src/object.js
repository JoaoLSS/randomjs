"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = exports.object = void 0;
var number_1 = require("./number");
var type_1 = require("./type");
var string_1 = require("./string");
var utils_1 = require("./utils");
var createGenerator = function (config) {
    var _a, _b, _c, _d;
    var depth = (_a = config === null || config === void 0 ? void 0 : config.depth) !== null && _a !== void 0 ? _a : number_1.integer();
    var exclude = (_b = config === null || config === void 0 ? void 0 : config.exclude) !== null && _b !== void 0 ? _b : [];
    var objectConfig = (_c = config === null || config === void 0 ? void 0 : config.objectConfig) !== null && _c !== void 0 ? _c : {};
    objectConfig.objectConfig = config === null || config === void 0 ? void 0 : config.objectConfig;
    objectConfig.arrayConfig = config === null || config === void 0 ? void 0 : config.arrayConfig;
    objectConfig.depth = depth - 1;
    var arrayConfig = (_d = config === null || config === void 0 ? void 0 : config.arrayConfig) !== null && _d !== void 0 ? _d : {};
    arrayConfig.objectConfig = config === null || config === void 0 ? void 0 : config.objectConfig;
    arrayConfig.arrayConfig = config === null || config === void 0 ? void 0 : config.arrayConfig;
    arrayConfig.depth = depth - 1;
    if (depth === 1) {
        if (!exclude.includes("object"))
            exclude.push("object");
        if (!exclude.includes("array"))
            exclude.push("array");
    }
    return type_1.generator(__assign(__assign({}, (config || {})), { exclude: exclude, objectConfig: objectConfig, arrayConfig: arrayConfig }));
};
/**
 * Function that creates a random object
 */
var object = function (config) {
    var _a;
    var numberOfProps = (_a = config === null || config === void 0 ? void 0 : config.numberOfProps) !== null && _a !== void 0 ? _a : number_1.integer({ min: 1 });
    var generate = createGenerator(config);
    var obj = {};
    for (var i = 0; i < numberOfProps; i++)
        obj[string_1.word()] = generate();
    return obj;
};
exports.object = object;
/**
 * Function that creates a random array
 */
var array = function (config) {
    var _a;
    var length = (_a = config === null || config === void 0 ? void 0 : config.length) !== null && _a !== void 0 ? _a : number_1.integer({ min: 1 });
    var generate = createGenerator(config);
    return utils_1.arrayOfLength(length).map(function () { return generate(); });
};
exports.array = array;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL29iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUNsQywrQkFBa0M7QUFDbEMsbUNBQStCO0FBQy9CLGlDQUF1QztBQUV2QyxJQUFNLGVBQWUsR0FBRyxVQUFDLE1BQWlDOztJQUN6RCxJQUFNLEtBQUssU0FBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsS0FBSyxtQ0FBSSxnQkFBTyxFQUFFLENBQUE7SUFDeEMsSUFBTSxPQUFPLFNBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLE9BQU8sbUNBQUksRUFBRSxDQUFBO0lBQ3JDLElBQU0sWUFBWSxTQUFHLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxZQUFZLG1DQUFJLEVBQUUsQ0FBQTtJQUMvQyxZQUFZLENBQUMsWUFBWSxHQUFHLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxZQUFZLENBQUE7SUFDaEQsWUFBWSxDQUFDLFdBQVcsR0FBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsV0FBVyxDQUFBO0lBQzlDLFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQTtJQUM5QixJQUFNLFdBQVcsU0FBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsV0FBVyxtQ0FBSSxFQUFFLENBQUE7SUFDN0MsV0FBVyxDQUFDLFlBQVksR0FBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsWUFBWSxDQUFBO0lBQy9DLFdBQVcsQ0FBQyxXQUFXLEdBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFdBQVcsQ0FBQTtJQUM3QyxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUE7SUFDN0IsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUNyRDtJQUNELE9BQU8sZ0JBQVMsdUJBQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEtBQUUsT0FBTyxTQUFBLEVBQUUsWUFBWSxjQUFBLEVBQUUsV0FBVyxhQUFBLElBQUcsQ0FBQTtBQUM1RSxDQUFDLENBQUE7QUFFRDs7R0FFRztBQUNJLElBQU0sTUFBTSxHQUFHLFVBQUMsTUFBNEI7O0lBQ2xELElBQU0sYUFBYSxTQUFHLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxhQUFhLG1DQUFJLGdCQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNsRSxJQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDeEMsSUFBTSxHQUFHLEdBQXlCLEVBQUUsQ0FBQTtJQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUMsRUFBRTtRQUFFLEdBQUcsQ0FBQyxhQUFJLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFBO0lBQ2hFLE9BQU8sR0FBRyxDQUFBO0FBQ1gsQ0FBQyxDQUFBO0FBTlksUUFBQSxNQUFNLFVBTWxCO0FBRUQ7O0dBRUc7QUFDSSxJQUFNLEtBQUssR0FBRyxVQUFDLE1BQTJCOztJQUNoRCxJQUFNLE1BQU0sU0FBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsTUFBTSxtQ0FBSSxnQkFBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDcEQsSUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3hDLE9BQU8scUJBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLFFBQVEsRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFBO0FBQ25ELENBQUMsQ0FBQTtBQUpZLFFBQUEsS0FBSyxTQUlqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGludGVnZXIgfSBmcm9tIFwiLi9udW1iZXJcIlxuaW1wb3J0IHsgZ2VuZXJhdG9yIH0gZnJvbSBcIi4vdHlwZVwiXG5pbXBvcnQgeyB3b3JkIH0gZnJvbSBcIi4vc3RyaW5nXCJcbmltcG9ydCB7IGFycmF5T2ZMZW5ndGggfSBmcm9tIFwiLi91dGlsc1wiXG5cbmNvbnN0IGNyZWF0ZUdlbmVyYXRvciA9IChjb25maWc/OiBSYW5kb20uTm9uUHJpbWl0dmVDb25maWcpID0+IHtcblx0Y29uc3QgZGVwdGggPSBjb25maWc/LmRlcHRoID8/IGludGVnZXIoKVxuXHRjb25zdCBleGNsdWRlID0gY29uZmlnPy5leGNsdWRlID8/IFtdXG5cdGNvbnN0IG9iamVjdENvbmZpZyA9IGNvbmZpZz8ub2JqZWN0Q29uZmlnID8/IHt9XG5cdG9iamVjdENvbmZpZy5vYmplY3RDb25maWcgPSBjb25maWc/Lm9iamVjdENvbmZpZ1xuXHRvYmplY3RDb25maWcuYXJyYXlDb25maWcgPSBjb25maWc/LmFycmF5Q29uZmlnXG5cdG9iamVjdENvbmZpZy5kZXB0aCA9IGRlcHRoIC0gMVxuXHRjb25zdCBhcnJheUNvbmZpZyA9IGNvbmZpZz8uYXJyYXlDb25maWcgPz8ge31cblx0YXJyYXlDb25maWcub2JqZWN0Q29uZmlnID0gY29uZmlnPy5vYmplY3RDb25maWdcblx0YXJyYXlDb25maWcuYXJyYXlDb25maWcgPSBjb25maWc/LmFycmF5Q29uZmlnXG5cdGFycmF5Q29uZmlnLmRlcHRoID0gZGVwdGggLSAxXG5cdGlmIChkZXB0aCA9PT0gMSkge1xuXHRcdGlmICghZXhjbHVkZS5pbmNsdWRlcyhcIm9iamVjdFwiKSkgZXhjbHVkZS5wdXNoKFwib2JqZWN0XCIpXG5cdFx0aWYgKCFleGNsdWRlLmluY2x1ZGVzKFwiYXJyYXlcIikpIGV4Y2x1ZGUucHVzaChcImFycmF5XCIpXG5cdH1cblx0cmV0dXJuIGdlbmVyYXRvcih7IC4uLihjb25maWcgfHwge30pLCBleGNsdWRlLCBvYmplY3RDb25maWcsIGFycmF5Q29uZmlnIH0pXG59XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgcmFuZG9tIG9iamVjdFxuICovXG5leHBvcnQgY29uc3Qgb2JqZWN0ID0gKGNvbmZpZz86IFJhbmRvbS5PYmplY3RDb25maWcpOiBvYmplY3QgPT4ge1xuXHRjb25zdCBudW1iZXJPZlByb3BzID0gY29uZmlnPy5udW1iZXJPZlByb3BzID8/IGludGVnZXIoeyBtaW46IDEgfSlcblx0Y29uc3QgZ2VuZXJhdGUgPSBjcmVhdGVHZW5lcmF0b3IoY29uZmlnKVxuXHRjb25zdCBvYmo6IHsgW2s6IHN0cmluZ106IGFueSB9ID0ge31cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlByb3BzOyBpKyspIG9ialt3b3JkKCldID0gZ2VuZXJhdGUoKVxuXHRyZXR1cm4gb2JqXG59XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgcmFuZG9tIGFycmF5XG4gKi9cbmV4cG9ydCBjb25zdCBhcnJheSA9IChjb25maWc/OiBSYW5kb20uQXJyYXlDb25maWcpOiBhbnlbXSA9PiB7XG5cdGNvbnN0IGxlbmd0aCA9IGNvbmZpZz8ubGVuZ3RoID8/IGludGVnZXIoeyBtaW46IDEgfSlcblx0Y29uc3QgZ2VuZXJhdGUgPSBjcmVhdGVHZW5lcmF0b3IoY29uZmlnKVxuXHRyZXR1cm4gYXJyYXlPZkxlbmd0aChsZW5ndGgpLm1hcCgoKSA9PiBnZW5lcmF0ZSgpKVxufVxuIl19