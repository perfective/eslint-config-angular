import { Linter } from 'eslint';

import { perfectiveEslintConfig } from '@perfective/eslint-config';

import { angularConfig } from './rules/angular/angular-config';
import { angularTemplateConfig } from './rules/angular/template/angular-template-config';
import { eslintConfig } from './rules/eslint-config/eslint-config';

export function perfectiveEslintAngularConfig(configs: Linter.Config[] = []): Linter.Config[] {
    return perfectiveEslintConfig([
        angularConfig,
        angularTemplateConfig,
        eslintConfig,
        ...configs,
    ]);
}
