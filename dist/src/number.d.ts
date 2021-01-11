/**
 * Function that returns a random integer
 * @param config object containing the configuration, min (defaults to 0) and max (default to 10)
 */
export declare const integer: (config?: Random.IntegerConfig | undefined) => number;
/**
 * Function that returns a random decimal
 * @param config object containing the configuration, min (defaults to 0), max (defaults to 10) and decimalPlaces (defaults to 2)
 */
export declare const decimal: (config?: Random.DecimalConfig | undefined) => number;
