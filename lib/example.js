'use strict';

var _index = require('./index');

var graph = new _index.Graph({ name: 'Test BentoBots Graph' });

var bot = new _index.Bot({ id: 'Add', component: 'Add' });
var bot2 = new _index.Bot({ id: 'Add2', component: 'Add' });

graph.addBot(bot);
graph.addBot(bot2);
// graph.removeBot(bot)

// var conn = new Connection({srcBot: bot, srcPort: 'SUM', tgtBot: bot2, tgtPort: 'X'})
// graph.addConnection(conn)

console.log(graph);