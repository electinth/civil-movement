import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';

import { parseCsv } from './src/utils/csv.js';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const replacedEnvironmentVariable = {
  'process.env.NODE_ENV': JSON.stringify(mode),
  'process.env.SITE_URL': process.env.SITE_URL
    ? `'${process.env.SITE_URL}'`
    : 'undefined',
  'process.env.GTAG': process.env.GTAG ? `'${process.env.GTAG}'` : 'undefined',
};

const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  warning.code === 'THIS_IS_UNDEFINED' ||
  onwarn(warning);

export default {
  client: {
    input: config.client.input().replace(/\.js$/, '.ts'),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': 'true',
        ...replacedEnvironmentVariable,
      }),
      svelte({
        preprocess: sveltePreprocess({ postcss: true }),
        compilerOptions: {
          dev,
          hydratable: true,
        },
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),
      typescript({ sourceMap: dev }),
      json(),
      parseCsv(),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: { server: config.server.input().server.replace(/\.js$/, '.ts') },
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': 'false',
        ...replacedEnvironmentVariable,
      }),
      svelte({
        preprocess: sveltePreprocess({ postcss: true }),
        compilerOptions: {
          dev,
          generate: 'ssr',
          hydratable: true,
        },
        emitCss: false,
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs(),
      typescript({ sourceMap: dev }),
      json(),
      parseCsv(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules
    ),

    preserveEntrySignatures: 'strict',
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input().replace(/\.js$/, '.ts'),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': 'true',
        ...replacedEnvironmentVariable,
      }),
      commonjs(),
      typescript({ sourceMap: dev }),
      !dev && terser(),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },
};
