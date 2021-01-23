import { integer, decimal } from "./number"
import { object, array } from "./object"
import { word } from "./string"

/**
 * Random types array
 */
const types: Random.Type[] = ["string", "array", "object", "int", "decimal", "null", "undefined"]

/**
 * This function returns a string representation of a random type,
 * the values can be "string","array","object","int","decimal","null","undefined"
 */
export const type = (config?: Random.TypeConfig): Random.Type => {
	const exclude = config?.exclude ?? []
	const _types = types.filter((t) => !exclude.includes(t))
	const max = _types.length - 1
	return _types[integer({ max })]
}

/**
 * This function returns another function that generates random object (primitive and non-primitive)
 * @param config the configuration object
 */
export const generator = (config: Random.NonPrimitveConfig) => (t = type({ exclude: config?.exclude })) => {
	switch (t) {
		case "array":
			return array(config?.arrayConfig)
		case "decimal":
			return decimal(config?.decimalConfig)
		case "int":
			return integer(config?.integerConfig)
		case "null":
			return null
		case "object":
			return object(config?.objectConfig)
		case "string":
			return word(config?.stringConfig)
		case "undefined":
			return undefined
	}
}
