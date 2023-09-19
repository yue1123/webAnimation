const { defineConfig } = require('rollup')
const typescript = require('@rollup/plugin-typescript')
const resolve = require('rollup-plugin-node-resolve')
const dts = require('rollup-plugin-dts').default

module.exports = defineConfig([
  {
    input: './src/index.ts',
    output: {
      exports: 'named',
      format: 'esm',
      dir: 'dist'
    },
    plugins: [typescript(), resolve()]
  },
  {
    input: './src/index.ts',
    plugins: [dts()],
    output: {
      format: 'esm',
      file: 'dist/index.d.ts'
    }
  }
])
