module.exports = {
    stories: ['../packages/**/*.stories.js', '../packages/**/**/*.stories.js'],
    addons: ['@storybook/addon-docs', '@storybook/addon-essentials'],
    webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        plugins: ['emotion'],
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
