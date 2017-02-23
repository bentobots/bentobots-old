'use strict';

var _index = require('./index');

var _safe = require('colors/safe');

var _safe2 = _interopRequireDefault(_safe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var graph = new _index.Graph({ name: 'Test Graph' });

var add = function add(_ref) {
  var _ref$X = _ref.X,
      X = _ref$X === undefined ? 1 : _ref$X,
      _ref$Y = _ref.Y,
      Y = _ref$Y === undefined ? 1 : _ref$Y;
  return { SUM: X + Y };
};
var prettyPrint = function prettyPrint(_ref2) {
  var IN = _ref2.IN;
  return console.log(_safe2.default.rainbow('The result is: ' + IN));
};

var bots = [new _index.Bot('Add1', add, { X: 3, Y: 3 }), new _index.Bot('Add2', add, { X: 20, Y: 10 }), new _index.Bot('Add3', add, { X: 'Add1>SUM', Y: 10 }), new _index.Bot('Add4', add, { X: 'Add3>SUM', Y: 10 }), new _index.Bot('Add5', add, { X: 'Add3>SUM', Y: 'Add4>SUM' }), new _index.Bot('Add6', add, { X: 'Add1>SUM', Y: 'Add3>SUM' }), new _index.Bot('Add7', add, { X: 'Add5>SUM', Y: 'Add6>SUM' }), new _index.Bot('Print', prettyPrint, { IN: 'Add7>SUM' })];

bots.map(graph.addBot);

// console.log(graph)
graph.run(true);