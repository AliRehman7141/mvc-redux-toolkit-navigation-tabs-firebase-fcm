module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          api: './api',
          assets: './assets',
          components: './components',
          navigations: './navigations',
          screens: './screens',
          store: './store',
          translation: './translation',
          utils: './utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
