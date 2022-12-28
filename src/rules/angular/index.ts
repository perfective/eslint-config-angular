export = {
    plugins: [
        '@angular-eslint',
    ],
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
        '@angular-eslint/contextual-decorator': 'error',
        '@angular-eslint/contextual-lifecycle': 'error',
        '@angular-eslint/directive-class-suffix': 'error',
        // TODO: Does not support tag-specific selector
        '@angular-eslint/directive-selector': ['error', {
            type: 'attribute',
            prefix: 'pf',
            style: 'camelCase',
        }],
        '@angular-eslint/no-attribute-decorator': 'error',
        '@angular-eslint/no-conflicting-lifecycle': 'error',
        '@angular-eslint/no-empty-lifecycle-method': 'error',
        '@angular-eslint/no-forward-ref': 'error',
        '@angular-eslint/no-host-metadata-property': ['error', {
            allowStatic: false,
        }],
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
        '@angular-eslint/no-output-rename': 'error',
        '@angular-eslint/no-outputs-metadata-property': 'error',
        '@angular-eslint/no-pipe-impure': 'error',
        '@angular-eslint/no-queries-metadata-property': 'error',
        '@angular-eslint/pipe-prefix': ['error', {
            prefixes: ['pf'],
        }],
        '@angular-eslint/prefer-on-push-component-change-detection': 'error',
        '@angular-eslint/prefer-output-readonly': 'error',
        // TODO: Does not support outside directory paths (e.g. ../common.scss)
        '@angular-eslint/relative-url-prefix': 'error',
        '@angular-eslint/require-localize-metadata': ['error', {
            requireDescription: false,
        }],
        '@angular-eslint/sort-ngmodule-metadata-arrays': 'warn',
        '@angular-eslint/use-component-selector': 'error',
        '@angular-eslint/use-component-view-encapsulation': 'error',
        '@angular-eslint/use-injectable-provided-in': 'error',
        '@angular-eslint/use-lifecycle-interface': 'error',
        '@angular-eslint/use-pipe-transform-interface': 'warn',
    },
};
