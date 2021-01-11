export * from "./src";
declare global {
    export namespace Random {
        /**
         * Possible types of module
         */
        type Type = "string" | "array" | "object" | "int" | "decimal" | "null" | "undefined";
        /**
         * Integer configuration object
         */
        interface IntegerConfig {
            min?: number;
            max?: number;
        }
        /**
         * Decimal configuration object
         */
        interface DecimalConfig extends IntegerConfig {
            decimalPlaces?: number;
        }
        /**
         * Type configuration object
         */
        interface TypeConfig {
            exclude?: Type[];
        }
        /**
         * Char configuration object
         */
        interface CharConfig {
            charset?: string;
        }
        /**
         * Word configuration object
         */
        interface WordConfig extends CharConfig {
            length?: number;
        }
        /**
         * Phrase configuration object
         */
        interface PhraseConfig extends CharConfig {
            numberOfWords?: number;
            lengths?: number[];
        }
        interface NonPrimitveConfig {
            depth?: number;
            exclude?: Type[];
            stringConfig?: WordConfig;
            integerConfig?: IntegerConfig;
            decimalConfig?: DecimalConfig;
            arrayConfig?: ArrayConfig;
            objectConfig?: ObjectConfig;
        }
        /**
         * Object configuration object
         */
        interface ObjectConfig extends NonPrimitveConfig {
            numberOfProps?: number;
        }
        /**
         * Array configuration object
         */
        interface ArrayConfig extends NonPrimitveConfig {
            length?: number;
        }
    }
}
