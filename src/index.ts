import { Linter } from 'eslint';

import { perfectiveEslintConfig } from '@perfective/eslint-config';

import { angularConfig } from './config/angular-eslint/angular-config';
import { angularTemplateConfig } from './config/angular-eslint/angular-template-config';
import { eslintConfig } from './config/eslint-config/eslint-config';

export function perfectiveEslintAngularConfig(configs: Linter.Config[] = []): Linter.Config[] {
    return perfectiveEslintConfig([
        angularConfig,
        angularTemplateConfig,
        eslintConfig,
        ...configs,
    ]);
}
