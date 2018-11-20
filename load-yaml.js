const Yaml = require('js-yaml')

module.exports = yaml => {
  return Yaml.load(yaml)
}
