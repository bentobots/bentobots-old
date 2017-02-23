class Bot {

  constructor ({ id, inPorts = {}, outPorts = {}, metadata = {} } = {}) {
    this.id = id
    this.metadata = {}
    this.inPorts = inPorts
    this.outPorts = outPorts
  }

  // addInPort({ id, validTypes }) {
  //   {
  //     id: id,
  //     validTypes: validTypes
  //   }
  // }

  static registerClass (key, constructor) {
    constructor.type = key
    Bot.classes[key] = constructor
  }

}

module.exports = Bot
