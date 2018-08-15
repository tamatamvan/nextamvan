const lost = require('lost')
const postcssNested = require('postcss-nested')

module.exports = {
  plugins: [
    lost({}),
    postcssNested({}),
  ]
}