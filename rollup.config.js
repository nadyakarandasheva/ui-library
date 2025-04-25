import typescript from 'rollup-plugin-typescript2';
import fg from 'fast-glob';
import fs from 'fs';
import path from 'path';
import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss'; // Добавляем плагин для CSS

// Найдём все index.ts[x] файлы
const inputFiles = fg.sync('src/**/index.{ts,tsx}');

// Создадим временный файл с реэкспортами
const entryFile = 'src/__build-entry.ts';
const imports = inputFiles
  .map((file, i) => {
    const importPath = './' + path.relative('src', file).replace(/\\/g, '/').replace(/\.(ts|tsx)$/, '');
    return `export * from '${importPath}';`;
  })
  .join('\n');

fs.writeFileSync(entryFile, imports);

export default [
  {
    input: entryFile,
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
      postcss({
        modules: true, // Включаем поддержку CSS модулей
        extract: true, // Вы можете изменить на false, если хотите инлайнить CSS в JS
        minimize: true, // Минимизируем CSS
      }),
    ],
  },
  {
    input: entryFile,
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  }
];
