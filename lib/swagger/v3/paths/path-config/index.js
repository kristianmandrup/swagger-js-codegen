const iterateResponses = require('./responses')

module.exports = function iterate(pathConfig, pathName) {
  // we should register one or more handlers for each type of thing we iterate!
  _.forOwn(pathConfig, (methodConfig, method) => {
    const {
      summary, // JavaDoc doc
      operationId, // function/route name
      parameters, // JavaDoc doc and route params
      responses // responses to mock
    } = methodConfig

    // generate route
    iterateResponses(responses)
  })
}
