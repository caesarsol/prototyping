const buildWebpackConfig = require('webpack-preset-accurapp')
const browsers = process.env.NODE_ENV === 'development' ? ['last 1 Chrome version'] : ['last 2 versions', 'ie 10']
const babelrc = require('webpack-preset-accurapp/babelrc')(browsers)
const { babel } = require('webpack-blocks')

function reactHotLoader() {
  return (context, { addLoader }) => config => {
    config.entry.main.splice(1, 0, 'react-hot-loader/patch')
    return config
  }
}

const babelrcHot = {
  ...babelrc,
  plugins: babelrc.plugins.concat([
    'react-hot-loader/babel',
  ]),
}

module.exports = buildWebpackConfig([
  reactHotLoader(),
  babel(babelrcHot),
])
