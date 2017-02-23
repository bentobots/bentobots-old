import Graph from './Graph'
import Bot from './bots/Bot'
import Connection from './Connection'

// it('can be created', () => {
//   const graph = new Graph()
//   expect(graph.name).toEqual('My Graph')
// })
const graphWithBots = new Graph()
const first = new Bot({id: 'first'})
const second = new Bot({id: 'second'})
// it('can add a bot')
graphWithBots.addBot(first)
graphWithBots.addBot(second)

it('can get a bot by id', () => {
  expect(graphWithBots.getBotById('second')).toEqual(second)
})

it('cannot add the same bot twice', () => {
  expect(() => {
    graphWithBots.addBot(second)
  }).toThrow(new Error('Bot was already added to graph'))
})

it('cannot add a bot with the same name', () => {
  const third = new Bot({id: 'second'})
  expect(() => {
    graphWithBots.addBot(third)
  }).toThrow(new Error('Bot with that id already in graph'))
})

it('can remove a bot', () => {
  const graphWithBotsClone = graphWithBots
  expect(graphWithBotsClone.bots.toArray().length).toEqual(2)
  graphWithBotsClone.removeBot(second)
  expect(graphWithBotsClone.bots.toArray().length).toEqual(1)
})

it('can add a connection')
it('can remove a connection')
