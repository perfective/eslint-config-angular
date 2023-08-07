export = {
    plugins: [
        '@angular-eslint',
    ],
    extends: [
        './functionality',
        './maintainability',
        './style',
    ],
    rules: {
        '@angular-eslint/no-empty-lifecycle-method': 'error',
        // See https://github.com/angular-eslint/angular-eslint/pull/1469
        '@angular-eslint/require-localize-metadata': ['off', {
            requireDescription: false,
        }],
        '@angular-eslint/sort-ngmodule-metadata-arrays': 'warn',
    },
};
