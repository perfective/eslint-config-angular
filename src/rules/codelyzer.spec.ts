import { TypescriptEslintTslintConfig } from '@perfective/eslint-config/rules';

import { typescriptEslintTslintConfig } from './codelyzer';

describe(typescriptEslintTslintConfig, () => {
    it('extends @perfective/eslint-config settings for @typescrypt-eslint/tslint/config with Codelyzer rules', () => {
        expect(typescriptEslintTslintConfig())
            .toStrictEqual({
                rules: {
                    'angular-whitespace': false,
                    'encoding': true,
                    'import-destructuring-spacing': true,
                    'import-spacing': true,
                    'no-default-import': true,
                    'no-inferred-empty-object-type': true,
                    'no-mergeable-namespace': true,
                    'no-tautology-expression': true,
                    'no-unnecessary-callback-wrapper': true,
                    'prefer-conditional-expression': [true, 'check-else-if'],
                    'prefer-inline-decorator': false,
                    'prefer-switch': [true, { 'min-cases': 2 }],
                    'prefer-while': true,
                    'no-unused-css': true,
                    'return-undefined': true,
                    'static-this': true,
                    'strict-comparisons': [true, {
                        'allow-object-equal-comparison': true,
                        'allow-string-order-comparison': true,
                    }],
                    'strict-type-predicates': true,
                    'switch-final-break': [true, 'always'],
                    'template-mouse-events-have-key-events': true,
                    'template-no-call-expression': true,
                    'template-no-negated-async': true,
                },
                rulesDirectory: ['codelyzer'],
            } as TypescriptEslintTslintConfig);
    });

    it('allows to extend @typescrypt-eslint/tslint/config rule', () => {
        expect(typescriptEslintTslintConfig({
            'strict-comparisons': false,
        }, ['tslint']))
            .toStrictEqual({
                rules: {
                    'angular-whitespace': false,
                    'encoding': true,
                    'import-destructuring-spacing': true,
                    'import-spacing': true,
                    'no-default-import': true,
                    'no-inferred-empty-object-type': true,
                    'no-mergeable-namespace': true,
                    'no-tautology-expression': true,
                    'no-unnecessary-callback-wrapper': true,
                    'prefer-conditional-expression': [true, 'check-else-if'],
                    'prefer-inline-decorator': false,
                    'prefer-switch': [true, { 'min-cases': 2 }],
                    'prefer-while': true,
                    'no-unused-css': true,
                    'return-undefined': true,
                    'static-this': true,
                    'strict-comparisons': false,
                    'strict-type-predicates': true,
                    'switch-final-break': [true, 'always'],
                    'template-mouse-events-have-key-events': true,
                    'template-no-call-expression': true,
                    'template-no-negated-async': true,
                },
                rulesDirectory: ['codelyzer', 'tslint'],
            } as TypescriptEslintTslintConfig);
    });
});
