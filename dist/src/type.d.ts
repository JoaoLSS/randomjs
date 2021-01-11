/**
 * This function returns a string representation of a random type,
 * the values can be "string","array","object","int","decimal","null","undefined"
 */
export declare const type: (config?: Random.TypeConfig | undefined) => Random.Type;
/**
 * This function returns another function that generates random object (primitive and non-primitive)
 * @param config the configuration object
 */
export declare const generator: (config: Random.NonPrimitveConfig) => (t?: Random.Type) => string | number | object | null | undefined;
