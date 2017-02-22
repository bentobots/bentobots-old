import Immutable from 'immutable'
import Graph from './Graph'
import Connection from './Connection'
import Bot from './bots/Bot'
import App from './bots/AddBot'

var graph = new Graph({name: 'John'})
var bot = new Bot({id: 'Add', component: 'Add'})
var bot2 = new Bot({id: 'Add2', component: 'Add'})

graph.addBot(bot)
graph.addBot(bot2)
// graph.removeBot(bot)
// graph.removeBot(bot)

var conn = new Connection({srcBot: bot, srcPort: 'SUM', tgtBot: bot2, tgtPort: 'X'})

graph.addConnection(conn)
console.log(graph)

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
