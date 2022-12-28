export = {
    plugins: [
        '@angular-eslint/template',
    ],
    extends: [
        './functionality',
        './maintainability',
    ],
    rules: {
        '@angular-eslint/template/accessibility-interactive-supports-focus': 'error',
        '@angular-eslint/template/accessibility-label-has-associated-control': 'error',
        '@angular-eslint/template/accessibility-role-has-required-aria': 'error',
        '@angular-eslint/template/attributes-order': ['warn', {
            alphabetical: false,
            order: [
                'STRUCTURAL_DIRECTIVE',
                'TEMPLATE_REFERENCE',
                'INPUT_BINDING',
                'TWO_WAY_BINDING',
                'OUTPUT_BINDING',
                'ATTRIBUTE_BINDING',
            ],
        }],
        '@angular-eslint/template/button-has-type': 'error',
        '@angular-eslint/template/eqeqeq': 'warn',
        '@angular-eslint/template/no-duplicate-attributes': 'error',
        '@angular-eslint/template/no-inline-styles': ['error', {
            allowNgStyle: false,
            allowBindToStyle: false,
        }],
    },
};
