/**
 * Function that returns a random integer
 * @param config object containing the configuration, min (defaults to 0) and max (default to 10)
 */
export const integer = (config?: Random.IntegerConfig) => {
	const min = Math.ceil(config?.min ?? -0.5)
	const max = (config?.max ?? 10) - min
	return min + Math.round(Math.random() * max)
}

/**
 * Function that returns a random decimal
 * @param config object containing the configuration, min (defaults to 0), max (defaults to 10) and decimalPlaces (defaults to 2)
 */
export const decimal = (config?: Random.DecimalConfig) => {
	const decimalPlaces = config?.decimalPlaces ?? 2
	const tenPow = Math.pow(10, decimalPlaces)
	const min = (config?.min ?? 0) * tenPow
	const max = (config?.max ?? 10) * tenPow
	return integer({ min, max }) / tenPow
}
