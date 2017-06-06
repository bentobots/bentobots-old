function Connection({ srcBot, srcPort, tgtBot, tgtPort, graph } = {}) {
  this.srcBot = srcBot
  this.srcPort = srcPort
  this.tgtBot = tgtBot
  this.tgtPort = tgtPort
  this.graph = graph
}

Connection.prototype.isValid = function() {
  if (!this.graph) return false
  if (srcBot === tgtBot) return false
  if (!tgtBot.inPorts.includes(tgtPort)) return false
  if (!srcBot.outPorts.keys.includes(outPort)) return false
  if (!srcBot.outPorts.keys.includes(outPort)) return false
  const validTypes = tgtBot.inPorts.keys[tgtPort].validTypes
  if (validTypes && !validTypes.includes(srcBot.outPorts.keys[srcPort].type)) return false
  return true
}

export default Connection
