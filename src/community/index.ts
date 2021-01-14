export = {
    extends: [
        '../',
        '@perfective/eslint-config/community',
        '../rules/eslint-config',
    ],
    rules: {
        // Undesired behavior in functions like forkJoin
        'rxjs/finnish': 'off',
    },
};
