'use strict';

var _index = require('./index');

var _safe = require('colors/safe');

var _safe2 = _interopRequireDefault(_safe);

var _AddBot = require('./bots/AddBot');

var _AddBot2 = _interopRequireDefault(_AddBot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var graph = new _index.Graph({ name: 'Test Graph' });

// const add = ({ X = 1, Y = 1 }) => ({ SUM: X + Y })
var prettyPrint = function prettyPrint(_ref) {
  var IN = _ref.IN;
  return console.log(_safe2.default.rainbow('The result is: ' + IN));
};

var bots = [new _index.Bot('Add1', _AddBot2.default, { X: 3, Y: 3 }), new _index.Bot('Add2', _AddBot2.default, { X: 20, Y: 10 }), new _index.Bot('Add3', _AddBot2.default, { X: 'Add1>SUM', Y: 10 }), new _index.Bot('Add4', _AddBot2.default, { X: 'Add3>SUM', Y: 10 }), new _index.Bot('Add5', _AddBot2.default, { X: 'Add3>SUM', Y: 'Add4>SUM' }), new _index.Bot('Add6', _AddBot2.default, { X: 'Add1>SUM', Y: 'Add3>SUM' }), new _index.Bot('Add7', _AddBot2.default, { X: 'Add6>SUM', Y: 'Add5>SUM' }), new _index.Bot('Print1', prettyPrint, { IN: 'Add7>SUM' })];

bots.map(graph.addBot

// console.log(graph)
);graph.run();