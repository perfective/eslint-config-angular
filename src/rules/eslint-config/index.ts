import { typescriptEslintTslintConfig } from '../codelyzer';

import { typescriptEslintNamingConvention } from './rules/typescript-eslint';

export = {
    rules: {
        '@typescript-eslint/naming-convention': ['error', ...typescriptEslintNamingConvention()],
        // Legacy rules for TSLint and Codelyzer
        '@typescript-eslint/tslint/config': ['warn', typescriptEslintTslintConfig()],
        // The default, Angular-friendly, configuration
        'rxjs/finnish': [
            'error', {
                functions: true,
                methods: true,
                names: {
                    '^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false,
                },
                parameters: true,
                properties: true,
                types: {
                    '^EventEmitter$': false,
                },
                variables: true,
            },
        ],
    },
};
