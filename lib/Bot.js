'use strict';

function Bot(id, component) {
  var inputs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var metadata = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var visible = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  this.id = id;
  this.component = component;
  this.outputs = component.outputs;
  this.inputs = inputs;
  this.metadata = metadata;
  this.visible = visible;
}

Bot.prototype.work = function () {
  var _this = this;

  var inputs = {};
  Object.keys(this.inputs).forEach(function (k) {
    var value = _this.inputs[k];
    if (typeof value === 'string' || value instanceof String) {
      var patternMatch = value.match(/([A-Z][A-Za-z0-9]+)>([A-Z]+)/);
      if (patternMatch) {
        // if it matches Process1>PORT, then it's an alias
        inputs[k] = _this.graph.data[value.split('>')[0]][value.split('>')[1]];
      } else {
        inputs[k] = value;
      }
    } else {
      inputs[k] = value;
    }
  });
  this.graph.data[this.id] = this.outputs = this.component.implementation(inputs);
};

module.exports = Bot;