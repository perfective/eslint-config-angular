export = {
    plugins: [
        '@angular-eslint/template',
    ],
    rules: {
        '@angular-eslint/template/accessibility-alt-text': 'error',
        '@angular-eslint/template/accessibility-elements-content': 'error',
        '@angular-eslint/template/accessibility-label-for': 'error',
        '@angular-eslint/template/accessibility-label-has-associated-control': 'error',
        '@angular-eslint/template/accessibility-table-scope': 'error',
        '@angular-eslint/template/accessibility-valid-aria': 'error',
        '@angular-eslint/template/banana-in-box': 'warn',
        '@angular-eslint/template/click-events-have-key-events': 'error',
        '@angular-eslint/template/eqeqeq': 'warn',
        // TODO: Does not report "mouseover" events
        '@angular-eslint/template/mouse-events-have-key-events': 'error',
        '@angular-eslint/template/no-any': 'error',
        '@angular-eslint/template/no-autofocus': 'warn',
        '@angular-eslint/template/no-distracting-elements': 'warn',
        '@angular-eslint/template/no-duplicate-attributes': 'error',
        // TODO: Fails with "Cannot read property 'start' of undefined
        '@angular-eslint/template/no-negated-async': 'off',
        '@angular-eslint/template/no-positive-tabindex': 'error', // == accessibility-tabindex-no-positive
        '@angular-eslint/template/conditional-complexity': ['error', {
            // Max complexity 2 allows *ngIf to have only two conditions.
            //  Passes: *ngIf="isPublished && hasAccess"
            //  Fails:  *ngIf="isPublished && hasAccess && isMobile"
            // Use pipes to extract conditions logic
            maxComplexity: 2,
        }],
        '@angular-eslint/template/cyclomatic-complexity': 'off',
        '@angular-eslint/template/i18n': 'off',
        // TODO: Fails with "Cannot read property 'start' of undefined
        '@angular-eslint/template/no-call-expression': 'off',
        '@angular-eslint/template/use-track-by-function': 'error',
    },
};
