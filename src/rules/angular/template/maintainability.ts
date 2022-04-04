export = {
    rules: {
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
