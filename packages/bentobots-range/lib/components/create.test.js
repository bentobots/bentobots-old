'use strict';

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('creates a sequence with values', function () {
  var result = _create2.default.implementation({ START: 0, END: 20, STEP: 4 });
  expect(result).toEqual({ SEQ: [0, 4, 8, 12, 16, 20] });
});