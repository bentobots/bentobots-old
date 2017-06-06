import { List } from 'immutable'
import ASQ from 'asynquence'
import topolysis from 'topolysis'

function Graph({name = 'My Graph'} = {}) {
  this.name = name
  this.bots = new List()
  this.connections = new List()

  this.graph = {}
  this.sorted = []
  this.data = {}
}

Graph.prototype.addBot = function(bot, callback = null) {
  // console.log(bot)
  if (!bot) throw new Error('Bot not given')
  if (bot.graph) throw new Error('Bot was already added to graph')
  if (this.bots.find(b => b.id === bot.id)) {
    throw new Error('Bot with that id already in graph')
  }
  bot.graph = this
  this.graph[bot.id] = []
  this.bots = this.bots.push(bot)

  Object.keys(bot.inputs).forEach(k => {
    const value = bot.inputs[k]
    if (typeof value === 'string' || value instanceof String) {
      const patternMatch = value.match(/([A-Z][A-Za-z0-9]+)>([A-Z]+)/)
      if (patternMatch) { // if it matches Process1>PORT, then it's an alias
        this.graph[bot.id].push(patternMatch[1])
      }
    }
  })

  this.sort()

  if (callback) { callback(bot) }
}

Graph.prototype.removeBot = function(bot) {
  delete this.graph[bot.id]
  this.bots = this.bots.filterNot(b => b === bot)
  this.sort()
}

Graph.prototype.getBotById = function(id) {
  return this.bots.find(b => b.id === id)
}

Graph.prototype.addConnection = function(conn) {
  if (conn.graph) throw new Error('Connection was already added to a graph')
  this.graph[conn.srcBot.id].push(conn.tgtBot.id)

  conn.tgtBot.inputs[conn.tgtPort] = `${conn.srcBot.id}>${conn.srcPort}`

  conn.graph = this
  this.connections = this.connections.push(conn)
  this.sort()
}

Graph.prototype.removeConnection = function(conn) {
  const i = this.graph[conn.srcBot.id].indexOf(conn.tgtBot.id)
  if (i != -1) { this.graph[conn.srcBot.id].splice(i, 1) }

  // conn.tgtBot.inputs[conn.tgtPort] = null

  this.connections = this.connections.filterNot(c => c === conn)
  this.sort()
}

Graph.prototype.sort = function() {
  let toReverse = []
  for (const ids of topolysis(this.graph)) {
    toReverse.push(ids)
  }
  this.sorted = toReverse// .reverse()
}

Graph.prototype.run = function(callback, debug = true) {
  const wrap = (id) => (done) => {
    done(this.getBotById(id).work())
  }
  this.sorted.forEach(ids => {
    if (debug) {
      // console.log(`Running parallel batch... ${ids}`)
    }
    ASQ().all(...ids.map(wrap))//.then(() => callback())
  })
}

export default Graph
