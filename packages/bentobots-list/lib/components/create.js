'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var implementation = function implementation() {
  var INPUTS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var list = Object.keys(INPUTS
  // extract numbers from "ITEM${NUMBER}"
  ).map(function (k) {
    return k.match(/\d+$/)[0];
  }
  // sort 'naturally'
  ).sort(function (a, b) {
    return a - b;
  }
  // return input values in correct order
  ).map(function (sorted) {
    return INPUTS['ITEM' + sorted];
  });

  return { LIST: list };
};

var spec = {
  name: 'Create List',
  description: 'makes a list from what\'s passed into it',
  implementation: implementation,
  inputs: {
    ITEM0: {},
    ITEM1: {},
    ITEM2: {}
  },
  outputs: {
    LIST: {}
  }
};

exports.default = spec;