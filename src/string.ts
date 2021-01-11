import { defaultCharset, arrayOfLength } from "./utils"
import { integer } from "./number"

/**
 * Function that returns a random char
 * @param config configuration object containing the charset (defaults to "abcdefghijklmnopqrstuvwxyz")
 */
export const char = (config?: Random.CharConfig) => {
	const charset = config?.charset ?? defaultCharset
	const min = 0
	const max = charset.length - 1
	return charset.charAt(integer({ min, max }))
}

/**
 * Function that returns a random word
 * @param config configuration object containing the charset (defaults to "abcdefghijklmnopqrstuvwxyz")
 * and the lenght (defaults to random number between 3 and 10)
 */
export const word = (config?: Random.WordConfig) => {
	const charset = config?.charset ?? defaultCharset
	const length = config?.length ?? integer({ min: 3 })
	return arrayOfLength(length)
		.map(() => char({ charset }))
		.join("")
}

/**
 * Function that creates a random phrase with words separated by space
 * @param config the configuration object containing the charset (defaults to "abcdefghijklmnopqrstuvwxyz"),
 * the numberOfWords (defaults to the length of lengths array or 2) and the lengths array (default to an array of random
 * numbers between 3 and 10)
 */
export const phrase = (config?: Random.PhraseConfig) => {
	const charset = config?.charset ?? defaultCharset
	const numberOfWords = config?.numberOfWords ?? config?.lengths?.length ?? integer({ min: 2 })
	const lengths = arrayOfLength(numberOfWords).map((index) => config?.lengths?.[index] ?? integer({ min: 3 }))
	return lengths.map((length) => word({ charset, length })).join(" ")
}
