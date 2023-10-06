/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('rollup')
const typescript = require('@rollup/plugin-typescript')
const resolve = require('rollup-plugin-node-resolve')
const dts = require('rollup-plugin-dts').default
const { terser } = require('rollup-plugin-terser')
const replace = require('@rollup/plugin-replace')
const pkg = require('./package.json')
const eslint = require('@rollup/plugin-eslint').default
const copy = require('rollup-plugin-copy')

const root = process.cwd()
const sharedPlugins = [
  replace({
    values: {
      __DEV__: "process.env.NODE_ENV !== 'production'",
      __VERSION__: pkg.version
    },
    preventAssignment: true
  }),
  eslint({
    cwd: root
  }),
  typescript(),
  resolve()
]
const baseConfig = { exports: 'named', indent: '' }
const baseEsmConfig = { ...baseConfig, format: 'esm' }
const baseUmdConfig = { ...baseConfig, format: 'umd', name: 'start' /** export name */ }

module.exports = defineConfig([
  {
    input: './src/index.ts',
    output: [
      {
        ...baseEsmConfig,
        file: './dist/index.esm.js'
      },
      { ...baseEsmConfig, file: './dist/index.esm.min.js', plugins: [terser()] },
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
    plugins: [
      typescript(),
      resolve(),
      copy({
        targets: [{ src: 'src/polyfill.d.ts', dest: 'dist' }]
      })
    ]
  },
  {
    input: './src/index.ts',
    plugins: [dts()],
    output: {
      format: 'esm',
      file: 'dist/index.d.ts'
    }
  },
  {
    input: './src/animations/index.ts',
    plugins: [dts()],
    output: {
      format: 'esm',
      file: 'dist/animations.d.ts'
    }
  },
  {
    input: './src/easings/index.ts',
    plugins: [dts()],
    output: {
      format: 'esm',
      file: 'dist/easings.d.ts'
    }
  }
])
