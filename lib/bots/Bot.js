"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bot = function () {
  function Bot() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id,
        _ref$inPorts = _ref.inPorts,
        inPorts = _ref$inPorts === undefined ? {} : _ref$inPorts,
        _ref$outPorts = _ref.outPorts,
        outPorts = _ref$outPorts === undefined ? {} : _ref$outPorts,
        _ref$metadata = _ref.metadata,
        metadata = _ref$metadata === undefined ? {} : _ref$metadata;

    _classCallCheck(this, Bot);

    this.id = id;
    this.metadata = {};
    this.inPorts = inPorts;
    this.outPorts = outPorts;
  }

  // addInPort({ id, validTypes }) {
  //   {
  //     id: id,
  //     validTypes: validTypes
  //   }
  // }

  _createClass(Bot, null, [{
    key: "registerClass",
    value: function registerClass(key, constructor) {
      constructor.type = key;
      Bot.classes[key] = constructor;
    }
  }]);

  return Bot;
}();

module.exports = Bot;