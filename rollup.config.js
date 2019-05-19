import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import run from 'rollup-plugin-run';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const dev = process.env.NODE_ENV === 'development';
const watch = process.env.ROLLUP_WATCH;

export default {
  input: './src/server.js',
  output: {
    format: 'cjs',
    file: './build/server.js',
    esModule: false
  },
  external: Object.keys(pkg.dependencies)
    .concat(Object.keys(pkg.devDependencies))
    .concat([
      'crypto',
      'fs',
      'events',
      'url',
      'http',
      'https',
      'http2',
      'path',
      'os',
      'stream',
      'tls',
      'net',
      'zlib'
    ]),
  plugins: [
    json(),
    resolve({
      mainFields: ['module']
    }),
    commonjs({
      sourceMap: false
    }),
    !dev &&
      !watch &&
      babel({
        babelrc: true,
        exclude: 'node_modules/**'
      }),
    dev
      ? run()
      : !watch &&
        terser({
          compress: {
            unsafe_comps: true,
            unsafe_math: true,
            unsafe_methods: true,
            unsafe_proto: true,
            toplevel: true
          },
          mangle: true,
          safari10: true
        })
  ]
};
