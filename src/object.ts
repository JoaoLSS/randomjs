import { integer } from "./number"
import { generator } from "./type"
import { word } from "./string"
import { arrayOfLength } from "./utils"

const createGenerator = (config?: Random.NonPrimitveConfig) => {
	const depth = config?.depth ?? integer()
	const exclude = config?.exclude ?? []
	const objectConfig = config?.objectConfig ?? {}
	objectConfig.objectConfig = config?.objectConfig
	objectConfig.arrayConfig = config?.arrayConfig
	objectConfig.depth = depth - 1
	objectConfig.exclude = exclude
	const arrayConfig = config?.arrayConfig ?? {}
	arrayConfig.objectConfig = config?.objectConfig
	arrayConfig.arrayConfig = config?.arrayConfig
	arrayConfig.depth = depth - 1
	arrayConfig.exclude = exclude
	if (depth === 1) {
		if (!exclude.includes("object")) exclude.push("object")
		if (!exclude.includes("array")) exclude.push("array")
	}
	return generator({ ...(config || {}), exclude, objectConfig, arrayConfig })
}

/**
 * Function that creates a random object
 */
export const object = (config?: Random.ObjectConfig): object => {
	const numberOfProps = config?.numberOfProps ?? integer({ min: 1 })
	const generate = createGenerator(config)
	const obj: { [k: string]: any } = {}
	for (let i = 0; i < numberOfProps; i++) obj[word()] = generate()
	return obj
}

/**
 * Function that creates a random array
 */
export const array = (config?: Random.ArrayConfig): any[] => {
	const length = config?.length ?? integer({ min: 1 })
	const generate = createGenerator(config)
	return arrayOfLength(length).map(() => generate())
}
