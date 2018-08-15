const lost = require('lost')
const postcssNested = require('postcss-nested')
const postcssEasyImport = require('postcss-easy-import')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    postcssEasyImport({prefix: '_'}),
    autoprefixer({}),
    lost({}),
    postcssNested({}),
  ]
}