/**
 * Function that returns a random char
 * @param config configuration object containing the charset (defaults to "abcdefghijklmnopqrstuvwxyz")
 */
export declare const char: (config?: Random.CharConfig | undefined) => string;
/**
 * Function that returns a random word
 * @param config configuration object containing the charset (defaults to "abcdefghijklmnopqrstuvwxyz")
 * and the lenght (defaults to random number between 3 and 10)
 */
export declare const word: (config?: Random.WordConfig | undefined) => string;
/**
 * Function that creates a random phrase with words separated by space
 * @param config the configuration object containing the charset (defaults to "abcdefghijklmnopqrstuvwxyz"),
 * the numberOfWords (defaults to the length of lengths array or 2) and the lengths array (default to an array of random
 * numbers between 3 and 10)
 */
export declare const phrase: (config?: Random.PhraseConfig | undefined) => string;
