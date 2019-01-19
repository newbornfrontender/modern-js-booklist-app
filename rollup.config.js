import { sync as clean } from 'rimraf';
import resolve from 'rollup-plugin-node-resolve';

import babel from './plugins/babel';

const production = !process.env.ROLLUP_WATCH;

production && clean('public/*.{js,map}');

export default {
  input: 'src/index.js',

  output: {
    format: 'esm',
    dir: 'public',
    sourcemap: production,
  },

  plugins: [
    resolve({
      jsnext: true,
      browser: true,
      modulesOnly: true,
    }),

    babel(),
  ],
};
