import { cypressConfig } from '@perfective/eslint-config/cypress';
import { jestConfig } from '@perfective/eslint-config/jest';
import { jestDomConfig } from '@perfective/eslint-config/jest-dom';
import { rxjsConfig } from '@perfective/eslint-config/rxjs';
import { testingLibraryConfig } from '@perfective/eslint-config/testing-library';

import { perfectiveEslintAngularConfig } from './dist/index.js';

const eslintConfig = perfectiveEslintAngularConfig([
    {
        // Ignore generated tests directory.
        ignores: ['spec'],
    },
    cypressConfig,
    jestConfig,
    jestDomConfig,
    rxjsConfig,
    testingLibraryConfig,
]);

export default eslintConfig;
