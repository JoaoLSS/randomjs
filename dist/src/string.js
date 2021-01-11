"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phrase = exports.word = exports.char = void 0;
var utils_1 = require("./utils");
var number_1 = require("./number");
/**
 * Function that returns a random char
 * @param config configuration object containing the charset (defaults to "abcdefghijklmnopqrstuvwxyz")
 */
var char = function (config) {
    var _a;
    var charset = (_a = config === null || config === void 0 ? void 0 : config.charset) !== null && _a !== void 0 ? _a : utils_1.defaultCharset;
    var min = 0;
    var max = charset.length - 1;
    return charset.charAt(number_1.integer({ min: min, max: max }));
};
exports.char = char;
/**
 * Function that returns a random word
 * @param config configuration object containing the charset (defaults to "abcdefghijklmnopqrstuvwxyz")
 * and the lenght (defaults to random number between 3 and 10)
 */
var word = function (config) {
    var _a, _b;
    var charset = (_a = config === null || config === void 0 ? void 0 : config.charset) !== null && _a !== void 0 ? _a : utils_1.defaultCharset;
    var length = (_b = config === null || config === void 0 ? void 0 : config.length) !== null && _b !== void 0 ? _b : number_1.integer({ min: 3 });
    return utils_1.arrayOfLength(length)
        .map(function () { return exports.char({ charset: charset }); })
        .join("");
};
exports.word = word;
/**
 * Function that creates a random phrase with words separated by space
 * @param config the configuration object containing the charset (defaults to "abcdefghijklmnopqrstuvwxyz"),
 * the numberOfWords (defaults to the length of lengths array or 2) and the lengths array (default to an array of random
 * numbers between 3 and 10)
 */
var phrase = function (config) {
    var _a, _b, _c, _d;
    var charset = (_a = config === null || config === void 0 ? void 0 : config.charset) !== null && _a !== void 0 ? _a : utils_1.defaultCharset;
    var numberOfWords = (_d = (_b = config === null || config === void 0 ? void 0 : config.numberOfWords) !== null && _b !== void 0 ? _b : (_c = config === null || config === void 0 ? void 0 : config.lengths) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : number_1.integer({ min: 2 });
    var lengths = utils_1.arrayOfLength(numberOfWords).map(function (index) { var _a, _b; return (_b = (_a = config === null || config === void 0 ? void 0 : config.lengths) === null || _a === void 0 ? void 0 : _a[index]) !== null && _b !== void 0 ? _b : number_1.integer({ min: 3 }); });
    return lengths.map(function (length) { return exports.word({ charset: charset, length: length }); }).join(" ");
};
exports.phrase = phrase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBdUQ7QUFDdkQsbUNBQWtDO0FBRWxDOzs7R0FHRztBQUNJLElBQU0sSUFBSSxHQUFHLFVBQUMsTUFBMEI7O0lBQzlDLElBQU0sT0FBTyxTQUFHLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxPQUFPLG1DQUFJLHNCQUFjLENBQUE7SUFDakQsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQ2IsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDOUIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFPLENBQUMsRUFBRSxHQUFHLEtBQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUM3QyxDQUFDLENBQUE7QUFMWSxRQUFBLElBQUksUUFLaEI7QUFFRDs7OztHQUlHO0FBQ0ksSUFBTSxJQUFJLEdBQUcsVUFBQyxNQUEwQjs7SUFDOUMsSUFBTSxPQUFPLFNBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLE9BQU8sbUNBQUksc0JBQWMsQ0FBQTtJQUNqRCxJQUFNLE1BQU0sU0FBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsTUFBTSxtQ0FBSSxnQkFBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDcEQsT0FBTyxxQkFBYSxDQUFDLE1BQU0sQ0FBQztTQUMxQixHQUFHLENBQUMsY0FBTSxPQUFBLFlBQUksQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsRUFBakIsQ0FBaUIsQ0FBQztTQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDWCxDQUFDLENBQUE7QUFOWSxRQUFBLElBQUksUUFNaEI7QUFFRDs7Ozs7R0FLRztBQUNJLElBQU0sTUFBTSxHQUFHLFVBQUMsTUFBNEI7O0lBQ2xELElBQU0sT0FBTyxTQUFHLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxPQUFPLG1DQUFJLHNCQUFjLENBQUE7SUFDakQsSUFBTSxhQUFhLGVBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGFBQWEseUNBQUksTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLE9BQU8sMENBQUUsTUFBTSxtQ0FBSSxnQkFBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDN0YsSUFBTSxPQUFPLEdBQUcscUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLG1DQUFLLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxPQUFPLDBDQUFHLEtBQUssb0NBQUssZ0JBQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFBLENBQUMsQ0FBQTtJQUM1RyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxZQUFJLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDcEUsQ0FBQyxDQUFBO0FBTFksUUFBQSxNQUFNLFVBS2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmYXVsdENoYXJzZXQsIGFycmF5T2ZMZW5ndGggfSBmcm9tIFwiLi91dGlsc1wiXG5pbXBvcnQgeyBpbnRlZ2VyIH0gZnJvbSBcIi4vbnVtYmVyXCJcblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgYSByYW5kb20gY2hhclxuICogQHBhcmFtIGNvbmZpZyBjb25maWd1cmF0aW9uIG9iamVjdCBjb250YWluaW5nIHRoZSBjaGFyc2V0IChkZWZhdWx0cyB0byBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCIpXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFyID0gKGNvbmZpZz86IFJhbmRvbS5DaGFyQ29uZmlnKSA9PiB7XG5cdGNvbnN0IGNoYXJzZXQgPSBjb25maWc/LmNoYXJzZXQgPz8gZGVmYXVsdENoYXJzZXRcblx0Y29uc3QgbWluID0gMFxuXHRjb25zdCBtYXggPSBjaGFyc2V0Lmxlbmd0aCAtIDFcblx0cmV0dXJuIGNoYXJzZXQuY2hhckF0KGludGVnZXIoeyBtaW4sIG1heCB9KSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgYSByYW5kb20gd29yZFxuICogQHBhcmFtIGNvbmZpZyBjb25maWd1cmF0aW9uIG9iamVjdCBjb250YWluaW5nIHRoZSBjaGFyc2V0IChkZWZhdWx0cyB0byBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCIpXG4gKiBhbmQgdGhlIGxlbmdodCAoZGVmYXVsdHMgdG8gcmFuZG9tIG51bWJlciBiZXR3ZWVuIDMgYW5kIDEwKVxuICovXG5leHBvcnQgY29uc3Qgd29yZCA9IChjb25maWc/OiBSYW5kb20uV29yZENvbmZpZykgPT4ge1xuXHRjb25zdCBjaGFyc2V0ID0gY29uZmlnPy5jaGFyc2V0ID8/IGRlZmF1bHRDaGFyc2V0XG5cdGNvbnN0IGxlbmd0aCA9IGNvbmZpZz8ubGVuZ3RoID8/IGludGVnZXIoeyBtaW46IDMgfSlcblx0cmV0dXJuIGFycmF5T2ZMZW5ndGgobGVuZ3RoKVxuXHRcdC5tYXAoKCkgPT4gY2hhcih7IGNoYXJzZXQgfSkpXG5cdFx0LmpvaW4oXCJcIilcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSByYW5kb20gcGhyYXNlIHdpdGggd29yZHMgc2VwYXJhdGVkIGJ5IHNwYWNlXG4gKiBAcGFyYW0gY29uZmlnIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCBjb250YWluaW5nIHRoZSBjaGFyc2V0IChkZWZhdWx0cyB0byBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCIpLFxuICogdGhlIG51bWJlck9mV29yZHMgKGRlZmF1bHRzIHRvIHRoZSBsZW5ndGggb2YgbGVuZ3RocyBhcnJheSBvciAyKSBhbmQgdGhlIGxlbmd0aHMgYXJyYXkgKGRlZmF1bHQgdG8gYW4gYXJyYXkgb2YgcmFuZG9tXG4gKiBudW1iZXJzIGJldHdlZW4gMyBhbmQgMTApXG4gKi9cbmV4cG9ydCBjb25zdCBwaHJhc2UgPSAoY29uZmlnPzogUmFuZG9tLlBocmFzZUNvbmZpZykgPT4ge1xuXHRjb25zdCBjaGFyc2V0ID0gY29uZmlnPy5jaGFyc2V0ID8/IGRlZmF1bHRDaGFyc2V0XG5cdGNvbnN0IG51bWJlck9mV29yZHMgPSBjb25maWc/Lm51bWJlck9mV29yZHMgPz8gY29uZmlnPy5sZW5ndGhzPy5sZW5ndGggPz8gaW50ZWdlcih7IG1pbjogMiB9KVxuXHRjb25zdCBsZW5ndGhzID0gYXJyYXlPZkxlbmd0aChudW1iZXJPZldvcmRzKS5tYXAoKGluZGV4KSA9PiBjb25maWc/Lmxlbmd0aHM/LltpbmRleF0gPz8gaW50ZWdlcih7IG1pbjogMyB9KSlcblx0cmV0dXJuIGxlbmd0aHMubWFwKChsZW5ndGgpID0+IHdvcmQoeyBjaGFyc2V0LCBsZW5ndGggfSkpLmpvaW4oXCIgXCIpXG59XG4iXX0=