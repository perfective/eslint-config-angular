export = {
    extends: [
        './',
        '@perfective/eslint-config/community',
    ],
    overrides: [
        {
            files: ['*.ts'],
            extends: [
                './rules/eslint-config',
            ],
            rules: {
                // Undesired behavior in functions like forkJoin
                'rxjs/finnish': 'off',
            },
        },
        {
            files: ['*.component.html'],
            rules: {
                '@angular-eslint/template/conditional-complexity': ['error', {
                    maxComplexity: 3,
                }],
            },
        },
    ],
};
