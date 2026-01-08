import { Linter } from 'eslint';

import { perfectiveEslintConfig } from '@perfective/eslint-config';

import { angularConfig } from './angular-eslint/angular-config';
import { angularTemplateConfig } from './angular-eslint/angular-template-config';
import { eslintConfig } from './eslint-config/eslint-config';

export function perfectiveEslintAngularConfig(configs: Linter.Config[] = []): Linter.Config[] {
    return perfectiveEslintConfig([
        angularConfig,
        angularTemplateConfig,
        eslintConfig,
        ...configs,
    ]);
}
