// import { Graph, Bot } from '../lib'
var BentoBots = require("../lib")
var colors = require('colors/safe')

var graph = new BentoBots.Graph({name: 'Test Graph'})

const add = { implementation: ({ X = 1, Y = 1 }) => ({ SUM: X + Y }) }
const prettyPrint = { implementation: ({ IN }) => console.log(colors.rainbow(`The result is: ${IN}`)) }

const bots = [
  new BentoBots.Bot('Add1', add, { X: 3, Y: 3 }),
  new BentoBots.Bot('Add2', add, { X: 20, Y: 10 }),
  new BentoBots.Bot('Add3', add, { X: 'Add1>SUM', Y: 10 }),
  new BentoBots.Bot('Add4', add, { X: 'Add3>SUM', Y: 10 }),
  new BentoBots.Bot('Add5', add, { X: 'Add3>SUM', Y: 'Add4>SUM' }),
  new BentoBots.Bot('Add6', add, { X: 'Add1>SUM', Y: 'Add3>SUM' }),
  new BentoBots.Bot('Add7', add, { X: 'Add6>SUM', Y: 'Add5>SUM' }),
  new BentoBots.Bot('Print1', prettyPrint, { IN: 'Add7>SUM' })
]

bots.map(b => graph.addBot(b))

graph.run()

// console.log(graph.connections)
// setTimeout(function() { console.log(graph) }, 1000)
