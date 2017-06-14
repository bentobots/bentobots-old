'use strict';

var _Graph = require('./Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _Bot = require('./Bot');

var _Bot2 = _interopRequireDefault(_Bot);

var _Connection = require('./Connection');

var _Connection2 = _interopRequireDefault(_Connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('can be created', function () {
  var graph = new _Graph2.default();
  expect(graph.name).toEqual('Untitled Graph');
});

var graphWithBots = new _Graph2.default();
var first = new _Bot2.default('first', function () {});
var second = new _Bot2.default('second', function () {});

graphWithBots.addBots([first, second]);

it('can get a bot by id', function () {
  expect(graphWithBots.getBotById('second')).toEqual(second);
});

it('cannot add the same bot twice', function () {
  expect(function () {
    graphWithBots.addBot(second);
  }).toThrow(new Error('Bot was already added to graph'));
});

it('cannot add a bot with the same name', function () {
  var third = new _Bot2.default('second', function () {});
  expect(function () {
    graphWithBots.addBot(third);
  }).toThrow(new Error("Bot with id 'second' already in graph"));
});

it('can remove a bot', function () {
  var graphWithBotsClone = graphWithBots;
  expect(graphWithBotsClone.bots.toArray().length).toEqual(2);
  graphWithBotsClone.removeBot(second);
  expect(graphWithBotsClone.bots.toArray().length).toEqual(1);
});

it('can add a connection', function () {
  var graph = new _Graph2.default();
  var bot1 = new _Bot2.default('first', function () {});
  var bot2 = new _Bot2.default('second', function () {});
  graph.addBots([bot1, bot2]);
  var connection = new _Connection2.default({ srcBot: bot1, srcPort: "OUT", tgtBot: bot2, tgtPort: "IN" });
  graph.addConnection(connection);
});

it('can remove a connection');