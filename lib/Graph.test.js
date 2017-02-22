'use strict';

var _Graph = require('./Graph');

var _Graph2 = _interopRequireDefault(_Graph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('can be created', function () {
  var graph = new _Graph2.default();
  expect(graph.name).toEqual('My Graph');
});

it('can get a bot by id');
it('can add a bot');
it('can remove a bot');
it('can add a connection');
it('can remove a connection');