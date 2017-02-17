var graphlib = require('graphlib'),
  memoize = require('memoizee')
  // colors = require('colors/safe')

class Bento {
  constructor () {
    this.g = new graphlib.Graph({directed: true})
  }
  getInputs (bot) {
    return this.g.inEdges(bot).map(e => {
      return [e.v.split('>')[0], this.g.node(e.v)]
    }).reduce((previous, current) => {
      previous[current[0]] = current[1]
      return previous
    }, {})
  }
  addInport (bot, port, value, pointer = false) {
    const key = `${port}>${bot}`
    const finalValue = pointer ? this.g.node(value)() : value
    this.g.setNode(key, memoize(() => { return finalValue }))
    this.g.setEdge(key, bot)
  }
  addOutport (bot, port) {
    const key = `${bot}>${port}`
    this.g.setNode(key, memoize(() => { return this.g.node(bot)()[port] }))
    this.g.setEdge(bot, key)
  }
  addBot (botName, component) { // , inports, outports
    this.g.setNode(botName, memoize(() => { return component(this.getInputs(botName)) }))
  }
  walk () {
    return graphlib.alg.topsort(this.g).map(node => {
      return { instance: node, output: JSON.stringify(this.g.node(node)())}
    })
  }
  prettyWalk () {
    this.walk().forEach((step) => {
      // console.log(step.instance, colors.green(step.output.toString()))
      console.log(step.instance, step.output.toString())
    })
  }
}

module.exports = Bento
