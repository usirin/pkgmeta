const load = require('./load-yaml')

module.exports = (yaml, parsers = {}) => {
  const pkgmeta = load(yaml)

  const externalsFn = parsers.externals || parseExternals

  const externals = externalsFn(pkgmeta)

  return {
    externals,
  }
}

const parseExternals = pkgmeta => {
  const externals = {}

  Object.keys(pkgmeta.externals).forEach(path => {
    const external = pkgmeta.externals[path]

    externals[path] = {
      ...external,
      path,
    }
  })

  return externals
}
