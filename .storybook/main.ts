import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  webpackFinal: async (config) => {
    // Обработка .ts/.tsx через Babel
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      ]
    });

    // Разрешаем импорты .ts и .tsx файлов
    config.resolve?.extensions?.push('.ts', '.tsx');

    // Чтобы можно было импортировать из packages
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      // Добавляем абсолютный путь к папке packages
      require('path').resolve(__dirname, '../packages'),
      'node_modules',
    ];

    return config;
  }
};

export default config;
