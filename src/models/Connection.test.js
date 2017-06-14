import Connection from './Connection'
import Bot from './Bot'

it('can be created', () => {
  const component = {
    outputs: {}
  }
  const src = new Bot('src', component)
  const tgt = new Bot('tgt', component)

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
