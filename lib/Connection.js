"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A connection (edge) between two bots (edges) in the graph
 * @constructor
 * @param {Bot} srcBot - The source bot to take data from
 * @param {string} srcPort -Which output from the source bot to pull from
 * @param {Bot} tgtBot - The target bot to send data to
 * @param {string} srcPort - Which input on the target bot to push to
 */
function Connection() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      srcBot = _ref.srcBot,
      srcPort = _ref.srcPort,
      tgtBot = _ref.tgtBot,
      tgtPort = _ref.tgtPort;

  // , graph
  this.srcBot = srcBot;
  this.srcPort = srcPort;
  this.tgtBot = tgtBot;
  this.tgtPort = tgtPort;
  // this.graph = graph
}

Connection.prototype.isValid = function () {
  if (!this.graph) return false;
  if (srcBot === tgtBot) return false;
  if (!tgtBot.inPorts.includes(tgtPort)) return false;
  if (!srcBot.outPorts.keys.includes(outPort)) return false;
  if (!srcBot.outPorts.keys.includes(outPort)) return false;
  var validTypes = tgtBot.inPorts.keys[tgtPort].validTypes;
  if (validTypes && !validTypes.includes(srcBot.outPorts.keys[srcPort].type)) return false;
  return true;
};

exports.default = Connection;