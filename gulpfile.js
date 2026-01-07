import gulp from 'gulp';

import * as perfectiveGulp from '@perfective/build/gulp';

export const clean = perfectiveGulp.clean(['./dist', '*.tsbuildinfo']);
export const docs = perfectiveGulp.asciidoctor();

export const spec = gulp.series(
    perfectiveGulp.clean(['./spec', '*.tsbuildinfo']),
    perfectiveGulp.typescript.esmBuild({
        config: './tsconfig.spec.json',
        output: './spec',
    }),
);

const full = gulp.series(
    clean,
    perfectiveGulp.typescript.esmBuild(),
    perfectiveGulp.typescript.tsDeclarations(),
    perfectiveGulp.packageJson.packageJson({
        // CommonJS is not supported
        main: undefined,
        module: './index.js',
        types: './index.d.ts',
        directories: {
            lib: './',
        },
        files: [
            '**/package.json',
            '**/*.js',
            '**/*.d.ts',
        ],
    }, {}),
    perfectiveGulp.copy([
        './LICENSE*',
        './CHANGELOG*',
        './README*',
        './src/**/package.json',
    ], './dist'),
    docs,
);

export default full;
