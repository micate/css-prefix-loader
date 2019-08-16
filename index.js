const path = require('path');
const fs = require('fs');
const deepmerge = require('deepmerge');
const css_parse = require('css-parse');
const css_stringify = require('css-stringify');

function processRules(list, options) {
  return list.map(function (r) {
    if (r.selectors) {
      r.selectors.forEach(function (s, index) {
        if (options.skip && options.skip.test(s)) {
          return;
        }
        r.selectors[index] = options.selector ? options.selector + " " + s : s;
      });
    }
    if (r.type === "media") {
      r.rules = processRules(r.rules, options);
    }
    return r;
  });
}

module.exports = function (source, options) {
  this.cacheable();

  options = deepmerge({
    selector: ".css-wrap",
    skip: null
  }, options || {});

  if (options.skip) {
    options.skip = (options.skip instanceof RegExp) ? options.skip : new RegExp(options.skip);
  }

  if (source) {
		if (fs.existsSync(path.resolve(source))) {
			source = fs.readFileSync(source).toString();
		}
	}

  var css = css_parse(source);
  css.stylesheet.rules = processRules(css.stylesheet.rules, options);
  return css_stringify(css);
};
