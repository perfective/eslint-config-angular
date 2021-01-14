export = {
    plugins: [
        '@angular-eslint',
        'jest-dom',
        'rxjs-angular',
        'testing-library',
    ],
    extends: [
        '@perfective/eslint-config',
        './rules/eslint-config',
        './rules/angular/best-practices',
        './rules/angular/functionality',
        './rules/angular/maintainability',
        './rules/angular/style',
        './rules/jest-dom',
        './rules/rxjs-angular',
        './rules/testing-library',
    ],
    rules: {},
};
