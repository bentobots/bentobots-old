'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var implementation = function implementation() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$LIST = _ref.LIST,
      LIST = _ref$LIST === undefined ? [] : _ref$LIST,
      _ref$INDEX = _ref.INDEX,
      INDEX = _ref$INDEX === undefined ? 0 : _ref$INDEX;

  return { ITEM: LIST[INDEX] };
};

var spec = {
  name: 'Get item at index',
  description: 'finds an item in a list',
  implementation: implementation,
  inputs: {
    LIST: {},
    INDEX: {}
  },
  outputs: {
    ITEM: {}
  }
};

exports.default = spec;