import {
    TsLintRules,
    TypescriptEslintTslintConfig,
    typescriptEslintTslintConfig as tsclintConfig,
} from '@perfective/eslint-config/rules';

const functionality: TsLintRules = {
    'template-accessibility-label-for': true,

    /** @deprecated - see @angular-eslint/template/mouse-events-have-key-events. */
    'template-mouse-events-have-key-events': true,

    /** @deprecated - see @angular-eslint/template/no-negated-async. */
    'template-no-negated-async': true,
};

const maintainability: TsLintRules = {
    'no-unused-css': true,

    /** @deprecated - see @angular-eslint/template/no-call-expression. */
    'template-no-call-expression': true,
};

const style: TsLintRules = {
    'angular-whitespace': false,
    'import-destructuring-spacing': true,
    'prefer-inline-decorator': false,
};

export function typescriptEslintTslintConfig(): TypescriptEslintTslintConfig {
    return tsclintConfig({
        ...functionality,
        ...maintainability,
        ...style,
    }, ['codelyzer']);
}