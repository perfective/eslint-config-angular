# Perfective ESLint Config for Angular

`@perfective/eslint-config-angular` provides
a [shareable ESLint configuration](https://eslint.org/docs/latest/developer-guide/shareable-configs)
for [Angular](https://angular.io) development.

`@perfective/eslint-config-angular` adds the following ESLint plugins to the
[`@perfective/eslint-config`](https://www.npmjs.com/package/@perfective/eslint-config) configuration:

- [`@angular-eslint/eslint-plugin`](https://github.com/angular-eslint/angular-eslint);
- [`eslint-plugin-rxjs-angular-x`](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-angular-x/).

To simplify configuring ESLint support in the IDEs and editors,
the severity of all fixable rules is a warning.
It allows distinguishing errors that have to be fixed manually from issues that will be fixed automatically.

## Setup

1. Require `@perfective/eslint-config-angular` and its peer dependencies as dev dependencies:

    ```bash
    npm install --save-dev @perfective/eslint-config-angular
    ```

    Required peer dependencies are installed automatically.

2. Import `perfectiveEslintAngularConfig` to `eslint.config.js`:

    ```javascript
    import { perfectiveEslintAngularConfig } from '@perfective/eslint-config-angular';

    export default perfectiveEslintAngularConfig();
    ```

3. _Optional_ Install optional peer dependencies to add tool-specific linting rules.

    ```bash
    npm install --save-dev \
    eslint-plugin-cypress \
    eslint-plugin-jest \
    eslint-plugin-jest-dom \
    eslint-plugin-testing-library
    ```

    Import configurations to `eslint.config.js`.

    ```javascript
    import { perfectiveEslintAngularConfig } from '@perfective/eslint-config-angular';

    // Optional dependencies.
    import { cypressConfig } from '@perfective/eslint-config/cypress';
    import { jestConfig, jestTypescriptConfig } from '@perfective/eslint-config/jest';
    import { jestDomConfig } from '@perfective/eslint-config/jest-dom';
    import { testingLibraryConfig } from '@perfective/eslint-config/testing-library';

    export default perfectiveEslintAngularConfig([
        cypressConfig,
        jestConfig,
        jestTypescriptConfig,
        jestDomConfig,
        testingLibraryConfig,
    ]);
    ```

    > **Note:** `*.d.ts` files and `dist` directories are ignored by the configuration.
    > `node_modules` and dot-files are ignored by the `eslint`.
    > If more directories or file types need to be ignored, see the
    > [`.eslintignore` file](https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file) docs.

Read the [full documentation](https://github.com/perfective/estlint-config-angular/blob/main/README.adoc)
in the repository.
