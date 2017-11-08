module.exports = function iterate(responses) {
  _.forOwn(responses, (methodConfig, responseId) => {
    const {
      content,
      description,
      headers
    } = responses

    // generate mock server with response generator

    if (responseId === '200') {
      // use content.schema to generate mock response via xfaker
    }
  })
}
