import * as _random from "./src"

export var Random = _random

declare global {
	var Random: typeof _random
	export namespace Random {
		/**
		 * Possible types of module
		 */
		export type Type = "string" | "array" | "object" | "int" | "decimal" | "null" | "undefined"

		/**
		 * Integer configuration object
		 */
		export interface IntegerConfig {
			min?: number
			max?: number
		}

		/**
		 * Decimal configuration object
		 */
		export interface DecimalConfig extends IntegerConfig {
			decimalPlaces?: number
		}

		/**
		 * Type configuration object
		 */
		export interface TypeConfig {
			exclude?: Type[]
		}

		/**
		 * Char configuration object
		 */
		export interface CharConfig {
			charset?: string
		}

		/**
		 * Word configuration object
		 */
		export interface WordConfig extends CharConfig {
			length?: number
		}

		/**
		 * Phrase configuration object
		 */
		export interface PhraseConfig extends CharConfig {
			numberOfWords?: number
			lengths?: number[]
		}

		export interface NonPrimitveConfig {
			depth?: number
			exclude?: Type[]
			stringConfig?: WordConfig
			integerConfig?: IntegerConfig
			decimalConfig?: DecimalConfig
			arrayConfig?: ArrayConfig
			objectConfig?: ObjectConfig
		}

		/**
		 * Object configuration object
		 */
		export interface ObjectConfig extends NonPrimitveConfig {
			numberOfProps?: number
		}

		/**
		 * Array configuration object
		 */
		export interface ArrayConfig extends NonPrimitveConfig {
			length?: number
		}
	}
}
