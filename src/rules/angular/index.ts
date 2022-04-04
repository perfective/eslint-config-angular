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
        '@angular-eslint/require-localize-metadata': ['error', {
            requireDescription: false,
        }],
        '@angular-eslint/sort-ngmodule-metadata-arrays': 'warn',
    },
};
