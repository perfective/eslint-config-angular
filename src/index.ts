export = {
    extends: [
        '@perfective/eslint-config',
    ],
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            // NOTE: processor property is not shown by the "--print-config" option.
            // This process "generates" an "inline-template-${i}.component.html" file,
            // so it is linted by the "*.component.html" rules.
            processor: '@angular-eslint/template/extract-inline-html',
            parserOptions: {
                // TBD: Does it have to be 2020?
                ecmaVersion: 2020,
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
                sourceType: 'module',
            },
            extends: [
                './rules/eslint-config',
                './rules/angular',
                './rules/rxjs-angular',
            ],
        },
        {
            files: ['*.component.html'],
            parser: '@angular-eslint/template-parser',
            extends: [
                './rules/angular/template',
            ],
        },
    ],
};
