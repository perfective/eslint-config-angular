import { describe, expect, it } from '@jest/globals';
import { TypescriptEslintNamingConvention } from '@perfective/eslint-config/rules';

import { typescriptEslintNamingConvention } from './typescript-eslint';

describe(typescriptEslintNamingConvention, () => {
    it('overrides @perfective/eslint-config settings for the @typescript-eslint/naming-convention rule', () => {
        expect(typescriptEslintNamingConvention())
            .toStrictEqual([
                {
                    selector: ['enumMember', 'typeLike'],
                    format: ['StrictPascalCase'],
                },
                {
                    selector: ['memberLike', 'variableLike'],
                    format: ['strictCamelCase'],
                },
                {
                    selector: ['objectLiteralProperty'],
                    modifiers: ['requiresQuotes'],
                    format: null,
                },
                {
                    selector: ['parameter'],
                    modifiers: ['unused'],
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: ['classProperty'],
                    modifiers: ['private'],
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: ['function'],
                    format: ['strictCamelCase', 'StrictPascalCase'],
                },
                {
                    selector: ['variable'],
                    modifiers: ['const'],
                    format: ['strictCamelCase', 'UPPER_CASE'],
                },
                {
                    selector: ['classProperty'],
                    modifiers: ['public', 'static'],
                    format: ['strictCamelCase', 'StrictPascalCase'],
                },
            ] as TypescriptEslintNamingConvention[]);
    });

    it('allows to extend @typescript-eslint/naming-convention rule configuration', () => {
        expect(typescriptEslintNamingConvention([
            {
                selector: ['enumMember'],
                format: ['StrictPascalCase', 'UPPER_CASE'],
            },
        ]))
            .toStrictEqual([
                {
                    selector: ['enumMember', 'typeLike'],
                    format: ['StrictPascalCase'],
                },
                {
                    selector: ['memberLike', 'variableLike'],
                    format: ['strictCamelCase'],
                },
                {
                    selector: ['objectLiteralProperty'],
                    modifiers: ['requiresQuotes'],
                    format: null,
                },
                {
                    selector: ['parameter'],
                    modifiers: ['unused'],
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: ['classProperty'],
                    modifiers: ['private'],
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: ['function'],
                    format: ['strictCamelCase', 'StrictPascalCase'],
                },
                {
                    selector: ['variable'],
                    modifiers: ['const'],
                    format: ['strictCamelCase', 'UPPER_CASE'],
                },
                {
                    selector: ['classProperty'],
                    modifiers: ['public', 'static'],
                    format: ['strictCamelCase', 'StrictPascalCase'],
                },
                {
                    selector: ['enumMember'],
                    format: ['StrictPascalCase', 'UPPER_CASE'],
                },
            ] as TypescriptEslintNamingConvention[]);
    });
});
