// rollup.config.js

export default {
  input: 'dist/index.js',
  output: [{
    file: 'main.es.js',
    format: 'es',
  }, {
    exports: 'named',
    file: 'main.common.js',
    format: 'cjs',
  }],
};
