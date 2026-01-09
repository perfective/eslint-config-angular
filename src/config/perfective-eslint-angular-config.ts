import { Linter } from 'eslint';

import { perfectiveEslintConfig, typescriptFiles } from '@perfective/eslint-config';

import { angularConfig } from './angular-eslint/angular-config';
import { angularTemplateConfig } from './angular-eslint/angular-template-config';
import { typescriptEslintNamingConvention } from './typescript-eslint/rules/typescript-eslint';

export function perfectiveEslintAngularConfig(configs: Linter.Config[] = []): Linter.Config[] {
    return perfectiveEslintConfig([
        angularConfig,
        angularTemplateConfig,
        // Override @perfective/eslint-config to support Angular.
        {
            files: typescriptFiles,
            rules: {
                // Conflicts with decorators
                'new-cap': 'off',
                '@typescript-eslint/naming-convention': ['error', ...typescriptEslintNamingConvention()],
                // The default, Angular-friendly, configuration
                'rxjs-x/finnish': ['error', {
                    functions: true,
                    methods: true,
                    names: {
                        '^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false,
                    },
                    parameters: true,
                    properties: true,
                    strict: false,
                    types: {
                        '^EventEmitter$': false,
                    },
                    variables: true,
                }],
            },
        },
        ...configs,
    ]);
}
