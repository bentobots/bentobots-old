'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bot = function () {
  function Bot(id, component) {
    var inputs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var metadata = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Bot);

    this.id = id;
    this.component = component;
    this.inputs = inputs;
    this.metadata = metadata;
    this.outputs = { SUM: 0 };
  }

  _createClass(Bot, [{
    key: '_outputs',
    value: function _outputs() {
      return this.outputs;
    }
  }, {
    key: 'work',
    value: function work() {
      var _this = this;

      // console.log(`running ${this.id}`)
      var inputs = {};
      Object.keys(this.inputs).forEach(function (k) {
        var value = _this.inputs[k];
        if (typeof value === 'string' || value instanceof String) {
          inputs[k] = _this.graph.data[value.split('>')[0]][value.split('>')[1]];
        } else {
          inputs[k] = value;
        }
      });
      // console.log(`working: ${this.id}`)
      this.graph.data[this.id] = this.outputs = this.component(inputs);
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

  }]);

  return Bot;
}();

module.exports = Bot;