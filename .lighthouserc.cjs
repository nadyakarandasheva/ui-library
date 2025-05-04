module.exports = {
  ci: {
    collect: {
      staticDistDir: './storybook-static',
      startServerCommand: 'npx http-server ./storybook-static',
      url: ['http://localhost:6006'],
      numberOfRuns: 1,
      settings: {
        // Ждем, пока загрузится весь контент перед тестированием
        waitUntilNetworkIdle: true,
      },
    },
    assert: {
      assertions: {
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'interactive': ['warn', { maxNumericValue: 3000 }]
      }
    },
    upload: {
      target: 'temporary-public-storage' // или 'none' если не хочешь загружать отчёты
    }
  }
};
