'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _asynquence = require('asynquence');

var _asynquence2 = _interopRequireDefault(_asynquence);

var _topolysis = require('topolysis');

var _topolysis2 = _interopRequireDefault(_topolysis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Graph = function () {
  function Graph() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'My Graph' : _ref$name;

    _classCallCheck(this, Graph);

    this.name = name;
    this.bots = _immutable2.default.List();
    this.connections = _immutable2.default.List();
    // this._graph = new graphlib.Graph({directed: true})
    this.graph = {};
    this.sorted = [];
  }

  _createClass(Graph, [{
    key: 'addBot',
    value: function addBot(bot) {
      if (!bot) throw new Error('Bot not given');
      if (bot.graph) throw new Error('Bot was already added to graph');
      if (this.bots.find(function (b) {
        return b.id === bot.id;
      })) {
        throw new Error('Bot with that id already in graph');
      }
      bot.graph = this;
      this.graph[bot.id] = [];
      this.bots = this.bots.push(bot);
      this.sort();
    }
  }, {
    key: 'removeBot',
    value: function removeBot(bot) {
      delete this.graph[bot.id];
      this.bots = this.bots.filterNot(function (b) {
        return b === bot;
      });
      this.sort();
    }
  }, {
    key: 'getBotById',
    value: function getBotById(id) {
      return this.bots.find(function (b) {
        return b.id === id;
      });
    }
  }, {
    key: 'addConnection',
    value: function addConnection(conn) {
      if (conn.graph) throw new Error('Connection was already added to a graph');

      this.graph[conn.srcBot.id].push(conn.tgtBot.id);

      conn.graph = this;
      this.connections = this.connections.push(conn);
      this.sort();
    }
  }, {
    key: 'removeConnection',
    value: function removeConnection(conn) {
      var i = this.graph[conn.srcBot.id].indexOf(conn.tgtBot.id);
      if (i != -1) {
        this.graph[conn.srcBot.id].splice(i, 1);
      }

      this.connections = this.connections.filterNot(function (c) {
        return c === conn;
      });
      this.sort();
    }
  }, {
    key: 'sort',
    value: function sort() {
      var toReverse = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _topolysis2.default)(this.graph)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var ids = _step.value;

          toReverse.push(ids);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.sorted = toReverse.reverse();
      // toReverse.reverse().forEach(ids => {
      //   // console.log(`RUNNING BATCH SEQUENTIALLY...... ${ids}`)
      //   // ids.forEach(id => bots.find(b => b.id === id).work())
      //   console.log(`RUNNING BATCH IN PARALLEL...... ${ids}`)
      //   ASQ().all(...ids.map(wrap))// .val(function () { console.log(arguments) })
      // })
    }
  }]);

  return Graph;
}();

exports.default = Graph;