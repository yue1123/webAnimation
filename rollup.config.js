const { defineConfig } = require('rollup')
const typescript = require('@rollup/plugin-typescript')
const resolve = require('rollup-plugin-node-resolve')
const dts = require('rollup-plugin-dts').default
const { terser } = require('rollup-plugin-terser')
const replace = require('@rollup/plugin-replace')
const pkg = require('./package.json')
const concat = require('rollup-plugin-concat')

const sharedPlugins = [
  replace({
    values: {
      __DEV__: "process.env.NODE_ENV !== 'production'",
      __VERSION__: pkg.version
    },
    preventAssignment: true
  }),
  typescript(),
  resolve()
]
const baseConfig = { exports: 'named' }
const baseEsmConfig = { ...baseConfig, format: 'esm' }
const baseUmdConfig = { ...baseConfig, format: 'umd', name: 'WebAnimation' /** export name */ }

module.exports = defineConfig([
  {
    input: './src/index.ts',
    output: [
      {
        ...baseEsmConfig,
        file: './dist/index.esm.js'
      },
      { ...baseEsmConfig, file: './dist/index.esm.min.js', plugins: [terser()] },
      { ...baseUmdConfig, file: './dist/index.umd.js' },
      { ...baseUmdConfig, file: './dist/index.umd.js', plugins: [terser()] }
    ],
    plugins: sharedPlugins
  },
  {
    input: './src/index.ts',
    external: /animations|easings/,
    output: {
      ...baseEsmConfig,
      dir: 'dist'
    },
    plugins: sharedPlugins
  },
  {
    input: './src/animations/index.ts',
    output: {
      ...baseEsmConfig,
      preserveModules: true,
      preserveModulesRoot: 'src',
      dir: 'dist'
    },
    plugins: sharedPlugins
  },
  {
    input: './src/easings/index.ts',
    output: {
      ...baseEsmConfig,
      preserveModules: true,
      preserveModulesRoot: 'src',
      dir: 'dist'
    },
    plugins: sharedPlugins
  },
  {
    input: './src/polyfill.ts',
    output: {
      file: './dist/polyfill.min.js'
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
