import { ESLint, Linter } from 'eslint';

import angularEslintPlugin from '@angular-eslint/eslint-plugin';
import { typescriptFiles } from '@perfective/eslint-config';

export function angularConfig(): Linter.Config {
    return {
        files: typescriptFiles,
        plugins: {
            '@angular-eslint': angularEslintPlugin as unknown as ESLint.Plugin,
        },
        rules: {
            '@angular-eslint/component-class-suffix': 'error',
            '@angular-eslint/component-max-inline-declarations': ['error', {
                animations: 0,
                styles: 0,
                template: 10,
            }],
            '@angular-eslint/component-selector': ['error', {
                type: 'attribute',
                prefix: 'pf',
                style: 'camelCase',
            }],
            '@angular-eslint/consistent-component-styles': 'error',
            '@angular-eslint/contextual-decorator': 'error',
            '@angular-eslint/contextual-lifecycle': 'error',
            '@angular-eslint/directive-class-suffix': 'error',
            // TODO: Does not support tag-specific selector
            '@angular-eslint/directive-selector': ['error', {
                type: 'attribute',
                prefix: 'pf',
                style: 'camelCase',
            }],
            '@angular-eslint/no-async-lifecycle-method': 'error',
            '@angular-eslint/no-attribute-decorator': 'error',
            '@angular-eslint/no-conflicting-lifecycle': 'error',
            '@angular-eslint/no-duplicates-in-metadata-arrays': 'error',
            '@angular-eslint/no-empty-lifecycle-method': 'error',
            '@angular-eslint/no-forward-ref': 'error',
            // Deprecated since v18.0.0
            '@angular-eslint/no-host-metadata-property': 'off',
            '@angular-eslint/no-input-prefix': ['error', {
                prefixes: ['can', 'is', 'on', 'should'],
            }],
            '@angular-eslint/no-input-rename': ['off', {
                allowedNames: [],
            }],
            '@angular-eslint/no-inputs-metadata-property': 'error',
            '@angular-eslint/no-lifecycle-call': 'error',
            '@angular-eslint/no-output-native': 'error',
            '@angular-eslint/no-output-on-prefix': 'error',
            '@angular-eslint/no-output-rename': 'warn',
            '@angular-eslint/no-outputs-metadata-property': 'error',
            '@angular-eslint/no-pipe-impure': 'error',
            '@angular-eslint/no-queries-metadata-property': 'error',
            '@angular-eslint/pipe-prefix': ['error', {
                prefixes: ['pf'],
            }],
            '@angular-eslint/prefer-on-push-component-change-detection': 'error',
            '@angular-eslint/prefer-output-readonly': 'error',
            // Deprecated
            '@angular-eslint/prefer-standalone-component': 'off',
            '@angular-eslint/prefer-standalone': 'off',
            // TODO: Does not support outside directory paths (e.g. ../common.scss)
            '@angular-eslint/relative-url-prefix': 'error',
            '@angular-eslint/runtime-localize': 'error',
            '@angular-eslint/require-localize-metadata': ['error', {
                requireDescription: false,
                requireMeaning: false,
            }],
            '@angular-eslint/sort-ngmodule-metadata-arrays': 'warn',
            '@angular-eslint/sort-lifecycle-methods': 'error',
            '@angular-eslint/use-component-selector': 'error',
            '@angular-eslint/use-component-view-encapsulation': 'error',
            '@angular-eslint/use-injectable-provided-in': 'error',
            '@angular-eslint/use-lifecycle-interface': 'warn',
            '@angular-eslint/use-pipe-transform-interface': 'warn',
        },
    };
}
