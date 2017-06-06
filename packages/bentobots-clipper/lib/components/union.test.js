'use strict';

var _ = require('..');

var subjectPaths = [{ X: 30, Y: 30 }, { X: 10, Y: 30 }, { X: 10, Y: 10 }, { X: 30, Y: 10 }];
var clipPaths = [{ X: 20, Y: 20 }, { X: 0, Y: 20 }, { X: 0, Y: 0 }, { X: 20, Y: 0 }];

it('can join shapes', function () {
  var result = (0, _.union)({ SUBJECT_PATHS: subjectPaths, CLIP_PATHS: clipPaths });
  var expected = {
    CLOSED: true,
    PATHS: [{ X: 20, Y: 10 }, { X: 30, Y: 10 }, { X: 30, Y: 30 }, { X: 10, Y: 30 }, { X: 10, Y: 20 }, { X: 0, Y: 20 }, { X: 0, Y: 0 }, { X: 20, Y: 0 }]
    // PATHS: [{X: 30, Y: 30}, {X: 10, Y: 30}, {X: 10, Y: 10}, {X: 30, Y: 10}]
  };
  expect(result).toEqual(expected);
});