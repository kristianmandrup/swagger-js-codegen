var _ = require('lodash');

function normalizeName(id) {
  return id.replace(/\.|\-|\{|\}/g, '_');
};

function getPathToMethodName(opts, m, path) {
  if (path === '/' || path === '') {
    return m;
  }

  // clean url path for requests ending with '/'
  var cleanPath = path.replace(/\/$/, '');

  var segments = cleanPath.split('/').slice(1);
  segments = _.transform(segments, function (result, segment) {
    if (segment[0] === '{' && segment[segment.length - 1] === '}') {
      segment = 'by' + segment[1].toUpperCase() + segment.substring(2, segment.length - 1);
    }
    result.push(segment);
  });
  var result = _.camelCase(segments.join('-'));
  return m.toLowerCase() + result[0].toUpperCase() + result.substring(1);
};

module.exports = {}
