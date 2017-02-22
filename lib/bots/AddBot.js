'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Bot = require('./Bot');

var _Bot2 = _interopRequireDefault(_Bot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var OperatorBot = require('./OperatorBot')
// var Utils = require('../Utils')

var AddBot = function AddBot() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options.operator = '+';
  // OperatorBot.call(this, options)
};

// Bot.registerClass('add', AddBot)

exports.default = AddBot;