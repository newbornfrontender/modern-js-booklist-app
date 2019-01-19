module.exports = ({ env, options: { map } }) => ({
  map,

  plugins: {
    'postcss-preset-env': {
      features: {
        'nesting-rules': {},
      },

      autoprefixer: env === 'production',
    },

    cssnano: env === 'production',
  },
});
