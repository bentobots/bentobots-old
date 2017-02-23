'use strict';

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _Graph = require('./Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _Connection = require('./Connection');

var _Connection2 = _interopRequireDefault(_Connection);

var _Bot = require('./bots/Bot');

var _Bot2 = _interopRequireDefault(_Bot);

var _AddBot = require('./bots/AddBot');

var _AddBot2 = _interopRequireDefault(_AddBot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var graph = new _Graph2.default({ name: 'John' });
var bot = new _Bot2.default({ id: 'Add', component: 'Add' });
var bot2 = new _Bot2.default({ id: 'Add2', component: 'Add' });

graph.addBot(bot);
graph.addBot(bot2);
// graph.removeBot(bot)
// graph.removeBot(bot)

var conn = new _Connection2.default({ srcBot: bot, srcPort: 'SUM', tgtBot: bot2, tgtPort: 'X' });

graph.addConnection(conn);
console.log(graph);

// graph.removeConnection(conn)

// console.log(graph)
// console.log(graph.sorted)

// connection
//   srcBot
//   srcPort
//   tgtBot
//   tgtPort
//   graph

// valid?
//   graph.exists
//   srcBot !== tgtBot
//   tgtBot.ports.include(tgtPort)
//   srcBot.ports.include(srcPort)
//   srcPort.type == tgtPort.type