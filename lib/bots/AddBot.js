"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// import Bot from './Bot'
// // var OperatorBot = require('./OperatorBot')
// // var Utils = require('../Utils')

// const AddBot = (options = {}) => {
//   options.operator = '+'
//   // OperatorBot.call(this, options)
// }

// // Bot.registerClass('add', AddBot)

// export default AddBot

var implementation = function implementation(_ref) {
  var _ref$X = _ref.X,
      X = _ref$X === undefined ? 1 : _ref$X,
      _ref$Y = _ref.Y,
      Y = _ref$Y === undefined ? 1 : _ref$Y;
  return { SUM: X + Y };
};

exports.default = implementation;