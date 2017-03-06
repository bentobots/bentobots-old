'use strict';

var _Graph = require('./Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _Bot = require('./bots/Bot');

var _Bot2 = _interopRequireDefault(_Bot);

var _Connection = require('./Connection');

var _Connection2 = _interopRequireDefault(_Connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// it('can be created', () => {
//   const graph = new Graph()
//   expect(graph.name).toEqual('My Graph')
// })
var graphWithBots = new _Graph2.default();
var fn = function fn() {};

var first = new _Bot2.default('first', fn);
var second = new _Bot2.default('second', fn);
// it('can add a bot')
graphWithBots.addBot(first);
graphWithBots.addBot(second);

it('can get a bot by id', function () {
  expect(graphWithBots.getBotById('second')).toEqual(second);
});

it('cannot add the same bot twice', function () {
  expect(function () {
    graphWithBots.addBot(second);
  }).toThrow(new Error('Bot was already added to graph'));
});

it('cannot add a bot with the same name', function () {
  var third = new _Bot2.default('second', fn);
  expect(function () {
    graphWithBots.addBot(third);
  }).toThrow(new Error('Bot with that id already in graph'));
});

it('can remove a bot', function () {
  var graphWithBotsClone = graphWithBots;
  expect(graphWithBotsClone.bots.toArray().length).toEqual(2);
  graphWithBotsClone.removeBot(second);
  expect(graphWithBotsClone.bots.toArray().length).toEqual(1);
});

it('can sort', function () {
  // const graph = new Graph()
  // const makeList = ({ x, y, z }) => { LIST: [x, y, z] }
  // graph.addBot(new Bot('first', makeList, {x: 1, y: 2, z: 3}))
  // graph.addBot(new Bot('second', makeList, {x: 'first>LIST', y: 4, z: 5}))
  // graph.addBot(new Bot('third', makeList, {x: 'first>LIST', y: 'first>LIST', z: 5}))
  // graph.sort()
  // expect(graph.sorted).toEqual(2)
});

it('can add a connection');
it('can remove a connection');