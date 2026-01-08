import {
    TypescriptEslintNamingConvention,
    typescriptEslintNamingConvention as typescriptEslintNamingConventionDefaults,
} from '@perfective/eslint-config/typescript-eslint';

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
