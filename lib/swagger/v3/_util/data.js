function dataFor(opts) {
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

  return data
}

module.exports = {
  dataFor
}
