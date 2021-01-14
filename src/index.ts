import { typescriptEslintTslintConfig } from './rules/codelyzer';
import { typescriptEslintNamingConvention } from './rules/eslint-config/rules/typescript-eslint';

export = {
    plugins: [
        '@angular-eslint',
        'jest-dom',
        'rxjs-angular',
        'testing-library',
    ],
    extends: [
        '@perfective/eslint-config',
        './rules/angular/best-practices',
        './rules/angular/functionality',
        './rules/angular/maintainability',
        './rules/angular/style',
        './rules/jest-dom',
        './rules/rxjs-angular',
        './rules/testing-library',
    ],
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
