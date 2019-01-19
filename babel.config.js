module.exports = {
  presets: ['@babel/env'],
  plugins: ['@babel/proposal-class-properties'],
  sourceMaps: true,

  env: {
    production: {
      presets: ['minify'],
    },
  },
};
