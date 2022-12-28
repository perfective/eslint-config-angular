export = {
    plugins: [
        '@angular-eslint/template',
    ],
    rules: {
        '@angular-eslint/template/accessibility-alt-text': 'error',
        '@angular-eslint/template/accessibility-elements-content': 'error',
        '@angular-eslint/template/accessibility-interactive-supports-focus': 'error',
        '@angular-eslint/template/accessibility-label-for': 'off',
        '@angular-eslint/template/accessibility-label-has-associated-control': 'error',
        '@angular-eslint/template/accessibility-role-has-required-aria': 'error',
        '@angular-eslint/template/accessibility-table-scope': 'warn',
        '@angular-eslint/template/accessibility-valid-aria': 'error',
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
        '@angular-eslint/template/eqeqeq': 'warn',
        '@angular-eslint/template/i18n': 'off',
        // TODO: Does not report "mouseover" events
        '@angular-eslint/template/mouse-events-have-key-events': 'error',
        '@angular-eslint/template/no-any': 'error',
        '@angular-eslint/template/no-autofocus': 'warn',
        // TODO: Fails with "Cannot read property 'start' of undefined
        '@angular-eslint/template/no-call-expression': 'off',
        '@angular-eslint/template/no-distracting-elements': 'warn',
        '@angular-eslint/template/no-duplicate-attributes': 'error',
        '@angular-eslint/template/no-inline-styles': ['error', {
            allowNgStyle: false,
            allowBindToStyle: false,
        }],
        // TODO: Fails with "Cannot read property 'start' of undefined
        '@angular-eslint/template/no-negated-async': 'off',
        '@angular-eslint/template/no-positive-tabindex': 'error', // == accessibility-tabindex-no-positive
        '@angular-eslint/template/use-track-by-function': 'error',
    },
};
