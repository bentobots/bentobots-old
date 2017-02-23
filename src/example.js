import { Graph, Bot } from './index'
import colors from 'colors/safe'

var graph = new Graph({name: 'Test Graph'})

const add = ({ X = 1, Y = 1 }) => ({ SUM: X + Y })
const prettyPrint = ({ IN }) => console.log(colors.rainbow(`The result is: ${IN}`))

const bots = [
  new Bot('Add1', add, { X: 3, Y: 3 }),
  new Bot('Add2', add, { X: 20, Y: 10 }),
  new Bot('Add3', add, { X: 'Add1>SUM', Y: 10 }),
  new Bot('Add4', add, { X: 'Add3>SUM', Y: 10 }),
  new Bot('Add5', add, { X: 'Add3>SUM', Y: 'Add4>SUM' }),
  new Bot('Add6', add, { X: 'Add1>SUM', Y: 'Add3>SUM' }),
  new Bot('Add7', add, { X: 'Add6>SUM', Y: 'Add5>SUM' }),
  new Bot('Print1', prettyPrint, { IN: 'Add7>SUM' })
]

bots.map(graph.addBot)

// console.log(graph)
graph.run(true)
