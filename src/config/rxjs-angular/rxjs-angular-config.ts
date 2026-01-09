import { Linter } from 'eslint';
import eslintPluginRxjsAngular from 'eslint-plugin-rxjs-angular-x';

import { Glob, typescriptFiles, typescriptLanguageOptions } from '@perfective/eslint-config';

export function rxjsAngularConfig(files: Glob[] = typescriptFiles): Linter.Config {
    return {
        files,
        languageOptions: typescriptLanguageOptions(),
        plugins: {
            'rxjs-angular-x': eslintPluginRxjsAngular,
        },
        rules: {
            'rxjs-angular-x/prefer-async-pipe': 'error',
            'rxjs-angular-x/prefer-composition': 'off',
            'rxjs-angular-x/prefer-takeuntil': 'off',
        },
    };
}
