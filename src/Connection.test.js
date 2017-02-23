import Connection from './Connection'
import Bot from './bots/Bot'

it('can be created', () => {
  const src = new Bot({name: 'src'})
  const tgt = new Bot({name: 'tgt'})

  const connection = new Connection({
    srcBot: src,
    srcPort: 'OUT',
    tgtBot: tgt,
    tgtPort: 'IN'
  })

  expect(connection.graph).toEqual(undefined)
  expect(connection.srcBot).toEqual(src)
  expect(connection.srcPort).toEqual('OUT')
  expect(connection.tgtBot).toEqual(tgt)
  expect(connection.tgtPort).toEqual('IN')
})

it('checks validity')
