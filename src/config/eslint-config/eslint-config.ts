import { Linter } from 'eslint';

import { typescriptFiles } from '@perfective/eslint-config';

import { typescriptEslintNamingConvention } from '../typescript-eslint/rules/typescript-eslint';

export function eslintConfig(): Linter.Config {
    return {
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
    };
}
