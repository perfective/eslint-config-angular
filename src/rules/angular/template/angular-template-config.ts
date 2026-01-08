import { ESLint, Linter } from 'eslint';

import angularTemplateEslintPlugin from '@angular-eslint/eslint-plugin-template';
import * as angularTemplateParser from '@angular-eslint/template-parser';

export function angularTemplateConfig(): Linter.Config {
    return {
        files: ['**/*.component.html'],
        languageOptions: {
            parser: {
                meta: angularTemplateParser.meta,
                // eslint-disable-next-line @typescript-eslint/naming-convention -- existing property.
                parseForESLint: angularTemplateParser.parseForESLint,
            },
        },
        plugins: {
            '@angular-eslint/template': angularTemplateEslintPlugin as unknown as ESLint.Plugin,
        },
        rules: {
            ...disabledBrokenRules(),
            '@angular-eslint/template/alt-text': 'error',
            '@angular-eslint/template/attributes-order': ['warn', {
                alphabetical: false,
                order: [
                    'STRUCTURAL_DIRECTIVE',
                    'TEMPLATE_REFERENCE',
                    'INPUT_BINDING',
                    'TWO_WAY_BINDING',
                    'OUTPUT_BINDING',
                    'ATTRIBUTE_BINDING',
                ],
            }],
            '@angular-eslint/template/banana-in-box': 'warn',
            '@angular-eslint/template/button-has-type': 'error',
            '@angular-eslint/template/click-events-have-key-events': 'error',
            '@angular-eslint/template/conditional-complexity': ['error', {
            // Max complexity 2 allows *ngIf to have only two conditions.
            //  Passes: *ngIf="isPublished && hasAccess"
            //  Fails:  *ngIf="isPublished && hasAccess && isMobile"
            // Use pipes to extract conditions logic
                maxComplexity: 2,
            }],
            '@angular-eslint/template/cyclomatic-complexity': 'off',
            '@angular-eslint/template/elements-content': 'error',
            '@angular-eslint/template/eqeqeq': 'warn',
            '@angular-eslint/template/i18n': 'off',
            '@angular-eslint/template/interactive-supports-focus': 'error',
            '@angular-eslint/template/label-has-associated-control': 'error',
            // TODO: Does not report "mouseover" events
            '@angular-eslint/template/mouse-events-have-key-events': 'error',
            '@angular-eslint/template/no-any': 'error',
            '@angular-eslint/template/no-autofocus': 'warn',
            // TODO: Fails with "Cannot read property 'start' of undefined
            '@angular-eslint/template/no-call-expression': 'off',
            '@angular-eslint/template/no-distracting-elements': 'warn',
            '@angular-eslint/template/no-duplicate-attributes': ['error', {
                allowTwoWayDataBinding: true,
                allowStylePrecedenceDuplicates: false,
                ignore: [],
            }],
            '@angular-eslint/template/no-inline-styles': ['error', {
                allowNgStyle: false,
                allowBindToStyle: false,
            }],
            '@angular-eslint/template/no-interpolation-in-attributes': 'error',
            // TODO: Fails with "Cannot read property 'start' of undefined
            '@angular-eslint/template/no-negated-async': 'off',
            '@angular-eslint/template/no-positive-tabindex': 'error', // == accessibility-tabindex-no-positive
            '@angular-eslint/template/prefer-control-flow': 'error',
            '@angular-eslint/template/prefer-ngsrc': 'error',
            '@angular-eslint/template/prefer-self-closing-tags': 'warn',
            '@angular-eslint/template/role-has-required-aria': 'error',
            '@angular-eslint/template/table-scope': 'warn',
            '@angular-eslint/template/use-track-by-function': ['error', {
                alias: [],
            }],
            '@angular-eslint/template/valid-aria': 'error',
        },
    };
}

/**
 * Disable rules that are broken for Angular templates.
 */
function disabledBrokenRules(): Record<string, string> {
    return {
        // From ESLint
        'no-implicit-globals': 'off',
        'strict': 'off',
        // From @stylistic
        '@stylistic/indent': 'off',
        '@stylistic/lines-around-comment': 'off',
        // From eslint-plugin-import
        'import/namespace': 'off',
        'import/no-unused-modules': 'off',
        // This rule is not broken, but causes a false-positive error.
        'import/unambiguous': 'off',
        // From eslint-plugin-jsdoc
        'jsdoc/check-alignment': 'off',
        'jsdoc/check-property-names': 'off',
        'jsdoc/check-syntax': 'off',
        'jsdoc/check-tag-names': 'off',
        'jsdoc/check-template-names': 'off',
        'jsdoc/check-types': 'off',
        'jsdoc/check-values': 'off',
        'jsdoc/empty-tags': 'off',
        'jsdoc/empty-types': 'off',
        'jsdoc/escape-inline-tags': 'off',
        'jsdoc/imports-as-dependencies': 'off',
        'jsdoc/multiline-blocks': 'off',
        'jsdoc/no-blank-blocks': 'off',
        'jsdoc/no-multi-asterisks': 'off',
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/prefer-import-tag': 'off',
        'jsdoc/reject-any-type': 'off',
        'jsdoc/reject-function-type': 'off',
        'jsdoc/require-asterisk-prefix': 'off',
        'jsdoc/require-description-complete-sentence': 'off',
        'jsdoc/require-hyphen-before-param-description': 'off',
        'jsdoc/require-next-description': 'off',
        'jsdoc/require-next-type': 'off',
        'jsdoc/require-property': 'off',
        'jsdoc/require-property-description': 'off',
        'jsdoc/require-property-name': 'off',
        'jsdoc/require-property-type': 'off',
        'jsdoc/require-throws-description': 'off',
        'jsdoc/require-throws-type': 'off',
        'jsdoc/require-yields-description': 'off',
        'jsdoc/require-yields-type': 'off',
        'jsdoc/sort-tags': 'off',
        'jsdoc/tag-lines': 'off',
        'jsdoc/ts-method-signature-style': 'off',
        'jsdoc/ts-no-empty-object-type': 'off',
        'jsdoc/ts-no-unnecessary-template-expression': 'off',
        'jsdoc/ts-prefer-function-type': 'off',
        'jsdoc/type-formatting': 'off',
        'jsdoc/valid-types': 'off',
        // From eslint-plugin-n
        'n/no-deprecated-api': 'off',
        'n/no-path-concat': 'off',
        'n/no-unsupported-features/es-builtins': 'off',
        'n/no-unsupported-features/node-builtins': 'off',
        'n/prefer-global/buffer': 'off',
        'n/prefer-global/console': 'off',
        'n/prefer-global/process': 'off',
        'n/prefer-global/text-decoder': 'off',
        'n/prefer-global/text-encoder': 'off',
        'n/prefer-global/url': 'off',
        'n/prefer-global/url-search-params': 'off',
        'n/prefer-promises/dns': 'off',
        'n/prefer-promises/fs': 'off',
    };
}
