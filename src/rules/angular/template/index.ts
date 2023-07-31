export = {
    plugins: [
        '@angular-eslint/template',
    ],
    rules: {
        '@angular-eslint/template/alt-text': 'error',
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
        '@angular-eslint/template/banana-in-box': 'warn',
        '@angular-eslint/template/button-has-type': 'error',
        '@angular-eslint/template/click-events-have-key-events': 'error',
        '@angular-eslint/template/conditional-complexity': ['error', {
            // Max complexity 2 allows *ngIf to have only two conditions.
            //  Passes: *ngIf="isPublished && hasAccess"
            //  Fails:  *ngIf="isPublished && hasAccess && isMobile"
            // Use pipes to extract conditions logic
            maxComplexity: 2,
        }],
        '@angular-eslint/template/cyclomatic-complexity': 'off',
        '@angular-eslint/template/elements-content': 'error',
        '@angular-eslint/template/eqeqeq': 'warn',
        '@angular-eslint/template/i18n': 'off',
        '@angular-eslint/template/interactive-supports-focus': 'error',
        '@angular-eslint/template/label-has-associated-control': 'error',
        // TODO: Does not report "mouseover" events
        '@angular-eslint/template/mouse-events-have-key-events': 'error',
        '@angular-eslint/template/no-any': 'error',
        '@angular-eslint/template/no-autofocus': 'warn',
        // TODO: Fails with "Cannot read property 'start' of undefined
        '@angular-eslint/template/no-call-expression': 'off',
        '@angular-eslint/template/no-distracting-elements': 'warn',
        '@angular-eslint/template/no-duplicate-attributes': ['error', {
            allowTwoWayDataBinding: true,
            allowStylePrecedenceDuplicates: false,
            ignore: [],
        }],
        '@angular-eslint/template/no-inline-styles': ['error', {
            allowNgStyle: false,
            allowBindToStyle: false,
        }],
        '@angular-eslint/template/no-interpolation-in-attributes': 'error',
        // TODO: Fails with "Cannot read property 'start' of undefined
        '@angular-eslint/template/no-negated-async': 'off',
        '@angular-eslint/template/no-positive-tabindex': 'error', // == accessibility-tabindex-no-positive
        '@angular-eslint/template/prefer-self-closing-tags': 'warning',
        '@angular-eslint/template/role-has-required-aria': 'error',
        '@angular-eslint/template/table-scope': 'warn',
        '@angular-eslint/template/use-track-by-function': 'error',
        '@angular-eslint/template/valid-aria': 'error',
    },
};
