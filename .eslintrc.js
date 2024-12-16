module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/resolver': {
      alias: [
        ['api', './api'],
        ['assets', './assets'],
        ['components', './components'],
        ['navigations', './navigations'],
        ['screens', './screens'],
        ['store', './store'],
        ['translation', './translation'],
        ['utils', './utils'],
      ],
    },
  },
};
