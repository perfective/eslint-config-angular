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
            '@angular-eslint/no-developer-preview': 'error',
            '@angular-eslint/no-duplicates-in-metadata-arrays': 'error',
            '@angular-eslint/no-empty-lifecycle-method': 'error',
            '@angular-eslint/no-experimental': 'error',
            '@angular-eslint/no-forward-ref': 'error',
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
            '@angular-eslint/no-uncalled-signals': 'error',
            '@angular-eslint/pipe-prefix': ['error', {
                prefixes: ['pf'],
            }],
            '@angular-eslint/prefer-host-metadata-property': 'error',
            '@angular-eslint/prefer-inject': 'error',
            '@angular-eslint/prefer-on-push-component-change-detection': 'error',
            '@angular-eslint/prefer-output-emitter-ref': 'error',
            '@angular-eslint/prefer-output-readonly': 'error',
            '@angular-eslint/prefer-signal-model': 'error',
            '@angular-eslint/prefer-signals': 'warn',
            '@angular-eslint/prefer-standalone': 'error',
            // TODO: Does not support outside directory paths (e.g. ../common.scss)
            '@angular-eslint/relative-url-prefix': 'error',
            '@angular-eslint/require-lifecycle-on-prototype': 'error',
            '@angular-eslint/runtime-localize': 'error',
            '@angular-eslint/require-localize-metadata': ['error', {
                requireCustomId: true,
                requireDescription: false,
                requireMeaning: false,
            }],
            '@angular-eslint/sort-keys-in-type-decorator': ['warn', {
                /* eslint-disable @typescript-eslint/naming-convention -- existing properties */
                Component: [
                    'selector',
                    'imports',
                    'standalone',
                    'templateUrl',
                    'template',
                    'styleUrl',
                    'styleUrls',
                    'styles',
                    'providers',
                    'changeDetection',
                    'encapsulation',
                    'viewProviders',
                    'host',
                    'hostDirectives',
                    'inputs',
                    'outputs',
                    'animations',
                    'schemas',
                    'exportAs',
                    'queries',
                    'preserveWhitespaces',
                    'jit',
                    'moduleId',
                    'interpolation',
                ],
                Directive: [
                    'selector',
                    'standalone',
                    'providers',
                    'host',
                    'hostDirectives',
                    'inputs',
                    'outputs',
                    'exportAs',
                    'queries',
                    'jit',
                ],
                NgModule: ['id', 'imports', 'declarations', 'providers', 'exports', 'bootstrap', 'schemas', 'jit'],
                Pipe: ['name', 'standalone', 'pure'],
                /* eslint-enable @typescript-eslint/naming-convention */
            }],
            '@angular-eslint/sort-lifecycle-methods': 'error',
            '@angular-eslint/use-component-selector': 'error',
            '@angular-eslint/use-component-view-encapsulation': 'error',
            '@angular-eslint/use-injectable-provided-in': 'error',
            '@angular-eslint/use-lifecycle-interface': 'warn',
            '@angular-eslint/use-pipe-transform-interface': 'warn',
        },
    };
}
