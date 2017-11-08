const _ = require('lodash');
const ts = require('./typescript');
const {
  dataFor
} = require('../_util');

const iteratePaths = require('./paths');

module.exports = function (opts, type) {
  throw 'Open API v3: Code generator not yet implemented :('

  const data = dataFor(opts)

  // See https://swagger.io/specification/

  // all the main sections available
  const {
    info,
    servers,
    paths,
    security,
    components,
    tags,
    externalDocs
  } = swagger

  // using forOwn to iterate objects key/value
  // See https://lodash.com/docs#forOwn

  iteratePaths(paths)

  _.forOwn(components, (componentConfig, name) => {
    const {
      schemas
    } = componentConfig
    _.forOwn(schemas, (schemaConfig, name) => {})
  })

  _.forOwn(security, function (securityConfig, name) {})
  _.forOwn(tags, function (tagConfig, name) {})
}
