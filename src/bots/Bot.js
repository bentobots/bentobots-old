class Bot {

  constructor (id, component, inputs = {}, metadata = {}) {
    this.id = id
    this.component = component
    this.inputs = inputs
    this.metadata = {}
    // this.outputs = outputs
  }

  work () {
    // console.log(`running ${this.id}`)
    const inputs = {}
    Object.keys(this.inputs).forEach(k => {
      const value = this.inputs[k]
      if (typeof value === 'string' || value instanceof String) {
        inputs[k] = this.graph.data[value.split('>')[0]][value.split('>')[1]]
      } else {
        inputs[k] = value
      }
    })
    // console.log(`working: ${this.id}`)
    this.graph.data[this.id] = this.component(inputs)
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
