var fs = require('fs');
var Mustache = require('mustache');
var beautify = require('js-beautify').js_beautify;
var lint = require('jshint').JSHINT;
var _ = require('lodash');

const getViewForSwagger1 = require('./swagger/v1')
const getViewForSwagger2 = require('./swagger/v2')
const getViewForSwagger3 = require('./swagger/v3')

module.exports = function (opts, type) {
  function getData(opts) {
    if (opts.swagger.swagger === '2.0') {
      return getViewForSwagger1(opts, type);
    }

    if (opts.swagger.swagger === '2.0') {
      return getViewForSwagger2(opts, type)
    }

    return getViewForSwagger3
  }

  // For Swagger Specification version 2.0 value of field 'swagger' must be a string '2.0'
  var data = getData(opts)

  if (type === 'custom') {
    if (!_.isObject(opts.template) || !_.isString(opts.template.class) || !_.isString(opts.template.method)) {
      throw new Error('Unprovided custom template. Please use the following template: template: { class: "...", method: "...", request: "..." }');
    }
  } else {
    if (!_.isObject(opts.template)) {
      opts.template = {};
    }
    var templates = __dirname + '/../templates/';
    opts.template.class = opts.template.class || fs.readFileSync(templates + type + '-class.mustache', 'utf-8');
    opts.template.method = opts.template.method || fs.readFileSync(templates + (type === 'typescript' ? 'typescript-' : '') + 'method.mustache', 'utf-8');
    if (type === 'typescript') {
      opts.template.type = opts.template.type || fs.readFileSync(templates + 'type.mustache', 'utf-8');
    }
  }

  if (opts.mustache) {
    _.assign(data, opts.mustache);
  }

  var source = Mustache.render(opts.template.class, data, opts.template);
  var lintOptions = {
    node: type === 'node' || type === 'custom',
    browser: type === 'angular' || type === 'custom' || type === 'react',
    undef: true,
    strict: true,
    trailing: true,
    smarttabs: true,
    maxerr: 999
  };
  if (opts.esnext) {
    lintOptions.esnext = true;
  }

  if (type === 'typescript') {
    opts.lint = false;
  }

  if (opts.lint === undefined || opts.lint === true) {
    lint(source, lintOptions);
    lint.errors.forEach(function (error) {
      if (error.code[0] === 'E') {
        throw new Error(error.reason + ' in ' + error.evidence + ' (' + error.code + ')');
      }
    });
  }
  if (opts.beautify === undefined || opts.beautify === true) {
    return beautify(source, {
      indent_size: 4,
      max_preserve_newlines: 2
    });
  } else {
    return source;
  }
};
