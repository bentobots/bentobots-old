import Graph from './Graph'
import Bot from './Bot'
import Connection from './Connection'

const botMock = {
  inputs: []
}

test('can be created, with default name', () => {
  const graph = new Graph()
  expect(graph.name).toMatchSnapshot()
})

test('can multiple bots with .addBots', () => {
  const graph = new Graph()
  // graph.addBots([bot1, bot2])
  expect(graph.bots.size).toEqual(2)
})

// const graphWithBots = new Graph()
// const first = new Bot('first', () => {})
// const second = new Bot('second', () => {})

// graphWithBots.addBots([first,second])

// it('can get a bot by id', () => {
//   expect(graphWithBots.getBotById('second')).toEqual(second)
// })

// it('cannot add the same bot twice', () => {
//   expect(() => {
//     graphWithBots.addBot(second)
//   }).toThrow(new Error('Bot was already added to graph'))
// })

// it('cannot add a bot with the same name', () => {
//   const third = new Bot('second', () => {})
//   expect(() => {
//     graphWithBots.addBot(third)
//   }).toThrow(new Error("Bot with id 'second' already in graph"))
// })

// it('can remove a bot', () => {
//   const graphWithBotsClone = graphWithBots
//   expect(graphWithBotsClone.bots.toArray().length).toEqual(2)
//   graphWithBotsClone.removeBot(second)
//   expect(graphWithBotsClone.bots.toArray().length).toEqual(1)
// })

// it('can add a connection', () => {
//   const graph = new Graph()
//   const bot1 = new Bot('first', () => {})
//   const bot2 = new Bot('second', () => {})
//   graph.addBots([bot1, bot2])
//   const connection = new Connection({ srcBot: bot1, srcPort: "OUT", tgtBot: bot2, tgtPort: "IN" })
//   graph.addConnection(connection)
// })

// it('can remove a connection')
