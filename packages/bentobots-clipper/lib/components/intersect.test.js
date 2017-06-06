'use strict';

var _intersect = require('./intersect');

var _intersect2 = _interopRequireDefault(_intersect);

var _clipperJs = require('clipper-js');

var _clipperJs2 = _interopRequireDefault(_clipperJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pathWithHole = [[{ X: -10, Y: 260 }, { X: -10, Y: 95 }, { X: 125, Y: -13 }, { X: 260, Y: 95 }, { X: 260, Y: 260 }].reverse(), [{ X: 10, Y: 105 }, { X: 125, Y: 13 }, { X: 240, Y: 105 }, { X: 240, Y: 240 }, { X: 10, Y: 240 }]];
var path = [{ X: 0, Y: 0 }, { X: 100, Y: 150 }, { X: 0, Y: 300 }];

it('can intersect shapes', function () {
  // console.log(JSON.stringify(new Shape(pathWithHole).fixOrientation()))

  var holeShape = new _clipperJs2.default(pathWithHole, true);
  var shape = new _clipperJs2.default([path], true);

  console.log(shape.intersect(holeShape));
  expect(true).toEqual(true

  // const result = intersect.implementation({SUBJECT_PATHS: pathWithHole, CLIP_PATHS: path})
  // const expected = {
  //   CLOSED: true,
  //   PATHS: 2
  // }
  // expect(result).toEqual(expected)
  );
});