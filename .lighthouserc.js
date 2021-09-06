module.exports = {
  ci: {
    collect: {
      url: ['https://cip.stage.cowain.dev/'],
      startServerCommand: 'rails server -e production',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'http://localhost:9001/',
      token: '60895d75-aed0-4430-b7c3-4a4bf68ec3a2',
    },
  },
};
