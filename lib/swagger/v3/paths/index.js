const iteratePathConfig = require('./path-config')

module.exports = function iteratePaths(paths) {
  // iterate over swagger model
  _.forOwn(paths, (pathName, pathConfig) => {
    console.log('iteratePaths', {
      pathName,
      pathConfig
    })

    // TODO: look into OpenAPI v3 spec to see how to best iterate
    // avoid SHIT code structure of the older generators!!!
    // use small, composable functions!!!

    iteratePathConfig(pathConfig, pathName)
  })
}
