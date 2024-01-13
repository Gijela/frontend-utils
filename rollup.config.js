const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser')

module.exports = [
  {
    input: './src/index.ts',
    output: [
      {
        dir: 'lib',
        format: 'cjs',
        entryFileNames: 'cjs/[name].js',
        sourcemap: false, // 是否输出sourcemap
      },
      {
        dir: 'lib',
        format: 'esm',
        entryFileNames: 'esm/[name].js',
        sourcemap: false, // 是否输出sourcemap
      },
      {
        dir: 'lib',
        format: 'umd',
        entryFileNames: 'umd/[name].js',
        name: 'frontend_utils', // umd模块名称，相当于一个命名空间，会自动挂载到window下面
        sourcemap: false,
        plugins: [terser()],
      },
    ],
    plugins: [
      resolve(), 
      commonjs(), 
      typescript({ 
        module: "ESNext", 
        tslib: require('tslib'),
      })
    ],
  }
]