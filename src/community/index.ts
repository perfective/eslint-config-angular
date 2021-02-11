export = {
    extends: [
        '../',
        '@perfective/eslint-config/community',
        '../rules/eslint-config',
    ],
    overrides: [
        {
            files: ['*.ts'],
            rules: {
                // Undesired behavior in functions like forkJoin
                'rxjs/finnish': 'off',
            },
        },
    ],
};
