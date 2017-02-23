'use strict';

var _Connection = require('./Connection');

var _Connection2 = _interopRequireDefault(_Connection);

var _Bot = require('./bots/Bot');

var _Bot2 = _interopRequireDefault(_Bot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('can be created', function () {
  var src = new _Bot2.default({ name: 'src' });
  var tgt = new _Bot2.default({ name: 'tgt' });

  var connection = new _Connection2.default({
    srcBot: src,
    srcPort: 'OUT',
    tgtBot: tgt,
    tgtPort: 'IN'
  });

  expect(connection.graph).toEqual(undefined);
  expect(connection.srcBot).toEqual(src);
  expect(connection.srcPort).toEqual('OUT');
  expect(connection.tgtBot).toEqual(tgt);
  expect(connection.tgtPort).toEqual('IN');
});

it('checks validity');