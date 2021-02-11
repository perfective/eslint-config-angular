export = {
    extends: [
        '@perfective/eslint-config',
    ],
    rules: {},
    overrides: [
        {
            files: ['*.ts'],
            extends: [
                './rules/eslint-config',
                './rules/angular',
                './rules/rxjs-angular',
            ],
        },
        {
            // Default extensions supported by Jest (/\.(spec|test)\.[jt]sx?$/)
            files: ['*.spec.ts', '*.spec.tsx', '*.test.ts', '*.test.tsx'],
            extends: [
                './rules/jest-dom',
                './rules/testing-library',
            ],
        },
    ],
};
