// rollup.config.js
//import typescript from '@rollup/plugin-typescript';

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
  //plugins: [typescript()],
};
