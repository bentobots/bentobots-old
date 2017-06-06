'use strict';

var _getItemAtIndex = require('./getItemAtIndex');

var _getItemAtIndex2 = _interopRequireDefault(_getItemAtIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('works without LIST', function () {
  var result = _getItemAtIndex2.default.implementation({ INDEX: 1 });
  expect(result).toEqual({ ITEM: undefined });
});

it('works without INDEX', function () {
  var result = _getItemAtIndex2.default.implementation({ LIST: [1, 2, 3] });
  expect(result).toEqual({ ITEM: 1 });
});

it('gets item at INDEX', function () {
  var result = _getItemAtIndex2.default.implementation({ LIST: [1, 2, 3], INDEX: 1 });
  expect(result).toEqual({ ITEM: 2 });
});

it('returns undefined if INDEX out of bounds', function () {
  var result = _getItemAtIndex2.default.implementation({ LIST: [1, 2, 3], INDEX: 5 });
  expect(result).toEqual({ ITEM: undefined });
});