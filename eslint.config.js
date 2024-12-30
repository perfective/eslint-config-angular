const perfectiveEslintConfig = require('@perfective/eslint-config');
const perfectiveCypressConfig = require('@perfective/eslint-config/cypress');
const perfectiveJestConfig = require('@perfective/eslint-config/jest');
const perfectiveJestDomConfig = require('@perfective/eslint-config/jest-dom');
const perfectiveRxjsConfig = require('@perfective/eslint-config/rxjs');
const perfectiveTestingLibraryConfig = require('@perfective/eslint-config/testing-library');

module.exports = [
    ...perfectiveEslintConfig.default,
    perfectiveCypressConfig.cypressConfig(),
    perfectiveJestConfig.jestConfig(),
    perfectiveJestDomConfig.jestDomConfig(),
    perfectiveRxjsConfig.rxjsConfig(),
    perfectiveTestingLibraryConfig.testingLibraryConfig(),
];
