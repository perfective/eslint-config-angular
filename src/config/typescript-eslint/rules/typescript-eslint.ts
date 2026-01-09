import {
    TypescriptEslintNamingConvention,
    typescriptEslintNamingConvention as typescriptEslintNamingConventionDefaults,
} from '@perfective/eslint-config/typescript-eslint';

/**
 * Creates an Angular-compatible configuration with the given extensions
 * for the `@typescript-eslint/naming-convention` rule.
 */
export function typescriptEslintNamingConvention(
    extensions: TypescriptEslintNamingConvention[] = [],
): TypescriptEslintNamingConvention[] {
    return typescriptEslintNamingConventionDefaults([
        {
            selector: ['function'],
            // Allow StrictPascalCase for decorators
            format: ['strictCamelCase', 'StrictPascalCase'],
        } as TypescriptEslintNamingConvention,
        {
            selector: ['variable'],
            modifiers: ['const'],
            // Allow UPPER_CASE caps for injectable constants.
            format: ['strictCamelCase', 'UPPER_CASE'],
        } as TypescriptEslintNamingConvention,
        {
            selector: ['classProperty'],
            modifiers: ['public', 'static'],
            // Allow StrictPascalCase for public enum properties.
            format: ['strictCamelCase', 'StrictPascalCase'],
        } as TypescriptEslintNamingConvention,
    ].concat(extensions));
}
