'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var implementation = function implementation(_ref) {
  var START = _ref.START,
      END = _ref.END,
      STEP = _ref.STEP;

  var sequence = [];
  for (var i = START; i <= END; i += STEP) {
    sequence.push(i);
  }
  return { SEQ: sequence };
};

var spec = {
  name: 'Create Range',
  implementation: implementation,
  inputs: {
    START: 0,
    END: 10,
    STEP: 1
  },
  outputs: {
    SEQ: {}
  }
};

exports.default = spec;