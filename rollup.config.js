import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/index.ts',
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
    external: ['react', 'react/jsx-runtime'], // Исключаем React и JSX-runtime
    plugins: [
      nodeResolve(),
      commonjs(), // Добавляем поддержку CommonJS
      typescript(),
    ],
  },
  {
    input: 'src/index.ts',
    output: { file: 'dist/index.d.ts', format: 'es' },
    plugins: [dts()],
  }
];
