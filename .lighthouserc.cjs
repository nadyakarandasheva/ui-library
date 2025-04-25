module.exports = {
  ci: {
    collect: {
      staticDistDir: './storybook-static',
      startServerCommand: 'npx http-server ./storybook-static',
      url: ['http://localhost:3000'],
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'interactive': ['warn', { maxNumericValue: 3000 }]
      }
    },
    upload: {
      target: 'temporary-public-storage' // или 'none' если не хочешь загружать отчёты
    }
  }
};
