import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import path from 'path';

const packageDir = __dirname;
const input = path.resolve(packageDir, 'src/index.ts');

export default [
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
        modules: true,
        extract: true,
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
