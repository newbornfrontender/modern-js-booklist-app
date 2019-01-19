import { transform } from '@babel/core';

export default () => ({
  name: 'babel',

  transform(source, id) {
    const { code, map } = transform(source, {
      filename: id,

      caller: {
        name: 'rollup',
        supportsStaticESM: true,
        supportsDynamicImport: true,
      },
    });

    return {
      code,
      map,
    };
  },
});
