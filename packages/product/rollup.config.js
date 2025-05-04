// rollup.config.js
const typescript = require('rollup-plugin-typescript2');
const dts = require('rollup-plugin-dts').default;
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const path = require('path');

const packageDir = __dirname;
const input = path.resolve(packageDir, 'src/index.ts');

module.exports = [
  {
    input,
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
      }
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: path.resolve(packageDir, 'tsconfig.json'),
        useTsconfigDeclarationDir: true,
      }),
      postcss({
        modules: {
          generateScopedName: '[name]__[local]__[hash:base64:5]',
        },
        inject: true,
        extract: 'index.css',
        minimize: true,
      }),
    ],
  },
  {
    input,
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  }
];
