function Bot(id, component, inputs = {}, metadata = {}) {
  this.id = id
  this.component = component
  this.outputs = component.outputs
  this.inputs = inputs
  this.metadata = metadata
}

Bot.prototype.work = function() {
  const inputs = {}
  Object.keys(this.inputs).forEach(k => {
    const value = this.inputs[k]
    if (typeof value === 'string' || value instanceof String) {
      const patternMatch = value.match(/([A-Z][A-Za-z0-9]+)>([A-Z]+)/)
      if (patternMatch) { // if it matches Process1>PORT, then it's an alias
        inputs[k] = this.graph.data[value.split('>')[0]][value.split('>')[1]]
      } else {
        inputs[k] = value
      }
    } else {
      inputs[k] = value
    }
  })
  this.graph.data[this.id] = this.outputs = this.component.implementation(inputs)
}

module.exports = Bot
