const { resolve } = require('path')
const postcss = require('rollup-plugin-postcss')

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        config: {
          path: './postcss.config.js'
        },
        extensions: ['.css'],
        minimize: true,
        include: ['./src/styles/index.css'],
        extract: resolve('dist/styles/all.css')
      }),
      postcss({
        config: {
          path: './postcss.config.js'
        },
        extensions: ['.css'],
        minimize: true,
        include: [
          './src/styles/modules/components.css',
          './src/styles/modules/utilities.css'
        ],
        extract: resolve('dist/styles/utilities-only.css')
      })
    )
    return config
  }
}
