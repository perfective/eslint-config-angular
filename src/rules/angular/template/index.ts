export = {
    plugins: [
        '@angular-eslint/template',
    ],
    extends: [
        './functionality',
        './maintainability',
    ],
    rules: {
        '@angular-eslint/template/accessibility-label-has-associated-control': 'error',
        '@angular-eslint/template/button-has-type': 'error',
        '@angular-eslint/template/eqeqeq': 'warn',
        '@angular-eslint/template/no-duplicate-attributes': 'error',
    },
};
