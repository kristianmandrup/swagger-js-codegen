var _ = require('lodash');
var ts = require('./typescript');

module.exports = function (opts, type) {
  var swagger = opts.swagger;
  var methods = [];
  var authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'COPY', 'HEAD', 'OPTIONS', 'LINK', 'UNLIK', 'PURGE', 'LOCK', 'UNLOCK', 'PROPFIND'];

  const useDomain = swagger.schemes && swagger.schemes.length > 0 && swagger.host && swagger.basePath

  function buildDomain(swagger) {
    return swagger.schemes[0] + '://' + swagger.host + swagger.basePath.replace(/\/+$/g, '')
  }
  var domain = useDomain ? buildDomain(swagger) : ''

  var data = {
    isNode: type === 'node' || type === 'react',
    isES6: opts.isES6 || type === 'react',
    description: swagger.info.description,
    isSecure: swagger.securityDefinitions !== undefined,
    moduleName: opts.moduleName,
    className: opts.className,
    imports: opts.imports,
    domain,
    methods: [],
    definitions: []
  };

  throw 'Open API v3: Code generator not yet implemented :('

  // iterate over swagger model
  swagger.paths.forEach((api, path) => {
    console.log(path)

    // TODO: look into OpenAPI v3 spec to see how to best iterate
    // avoid SHIT code structure of the older generators!!!
    // use small, composable functions!!!

    api.forEach((op, m) => {
      if (m.toLowerCase() === 'parameters') {
        globalParams = op;
      }
    });
    api.forEach(api, (op, m) => {

    })

    _.forEach(swagger.definitions, function (definition, name) {})
  })
}
