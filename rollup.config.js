import typescript from 'rollup-plugin-typescript2';
import fg from 'fast-glob';
import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const inputFiles = fg.sync('src/**/index.{ts,tsx}');

export default [
  {
    input: inputFiles,
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        exports: 'named',
        entryFileNames: '[name].cjs.js',
        preserveModules: true,
        preserveModulesRoot: 'src'
      },
      {
        dir: 'dists',
        format: 'esm',
        entryFileNames: '[name].esm.js',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ],
    external: ['react', 'react/jsx-runtime'], // Исключаем React и JSX-runtime
    plugins: [
      nodeResolve(),
      commonjs(), // Добавляем поддержку CommonJS
      typescript(),
    ],
  },
  {
    input: inputFiles,
    output: {
      dir: 'dist', format: 'es', preserveModules: true,
      preserveModulesRoot: 'src'
    },
    plugins: [dts()],
  }
];
