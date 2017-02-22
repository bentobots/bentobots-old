"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Connection = function () {
  function Connection() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        srcBot = _ref.srcBot,
        srcPort = _ref.srcPort,
        tgtBot = _ref.tgtBot,
        tgtPort = _ref.tgtPort,
        graph = _ref.graph;

    _classCallCheck(this, Connection);

    this.srcBot = srcBot;
    this.srcPort = srcPort;
    this.tgtBot = tgtBot;
    this.tgtPort = tgtPort;
    this.graph = graph;
  }

  _createClass(Connection, [{
    key: "isValid",
    value: function isValid() {
      if (!this.graph) return false;
      if (srcBot === tgtBot) return false;
      if (!tgtBot.inPorts.includes(tgtPort)) return false;
      if (!srcBot.outPorts.keys.includes(outPort)) return false;
      if (!srcBot.outPorts.keys.includes(outPort)) return false;
      var validTypes = tgtBot.inPorts.keys[tgtPort].validTypes;
      if (validTypes && !validTypes.includes(srcBot.outPorts.keys[srcPort].type)) return false;
      return true;
    }
  }]);

  return Connection;
}();

exports.default = Connection;