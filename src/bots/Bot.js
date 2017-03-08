class Bot {
  constructor (id, component, inputs = {}, metadata = {}, visible=true) {
    this.id = id
    this.component = component
    this.outputs = component.outputs
    this.inputs = inputs
    this.metadata = metadata
    this.visible = visible
  }

  work () {
    // console.log(`running ${this.id}`)
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
    // console.log(`working: ${this.id}`)
    this.graph.data[this.id] = this.outputs = this.component.implementation(inputs)
  }

  // addInPort({ id, validTypes }) {
  //   {
  //     id: id,
  //     validTypes: validTypes
  //   }
  // }

  // static registerClass (key, constructor) {
  //   constructor.type = key
  //   Bot.classes[key] = constructor
  // }
}

module.exports = Bot
