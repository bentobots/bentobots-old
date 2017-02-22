import Immutable from 'immutable'
import memoize from 'memoizee'
import ASQ from 'asynquence'
import topolysis from 'topolysis'

class Graph {

  constructor ({name = 'My Graph'} = {}) {
    this.name = name
    this.bots = Immutable.List()
    this.connections = Immutable.List()
    // this._graph = new graphlib.Graph({directed: true})
    this.graph = {}
    this.sorted = []
  }

  addBot (bot) {
    if (!bot) throw new Error('Bot not given')
    if (bot.graph) throw new Error('Bot was already added to graph')
    if (this.bots.find(b => b.id === bot.id)) {
      throw new Error('Bot with that id already in graph')
    }
    bot.graph = this
    this.graph[bot.id] = []
    this.bots = this.bots.push(bot)
    this.sort()
  }

  removeBot (bot) {
    delete this.graph[bot.id]
    this.bots = this.bots.filterNot(b => b === bot)
    this.sort()
  }

  getBotById (id) {
    return this.bots.find(b => b.id === id)
  }

  addConnection (conn) {
    if (conn.graph) throw new Error('Connection was already added to a graph')

    this.graph[conn.srcBot.id].push(conn.tgtBot.id)

    conn.graph = this
    this.connections = this.connections.push(conn)
    this.sort()
  }

  removeConnection (conn) {
    const i = this.graph[conn.srcBot.id].indexOf(conn.tgtBot.id)
    if (i != -1) { this.graph[conn.srcBot.id].splice(i, 1) }

    this.connections = this.connections.filterNot(c => c === conn)
    this.sort()
  }

  sort () {
    let toReverse = []
    for (const ids of topolysis(this.graph)) {
      toReverse.push(ids)
    }
    this.sorted = toReverse.reverse()
    // toReverse.reverse().forEach(ids => {
    //   // console.log(`RUNNING BATCH SEQUENTIALLY...... ${ids}`)
    //   // ids.forEach(id => bots.find(b => b.id === id).work())
    //   console.log(`RUNNING BATCH IN PARALLEL...... ${ids}`)
    //   ASQ().all(...ids.map(wrap))// .val(function () { console.log(arguments) })
    // })
  }

}

export default Graph
