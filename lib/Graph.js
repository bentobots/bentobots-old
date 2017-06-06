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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Graph = function () {
  function Graph() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'My Graph' : _ref$name;

    _classCallCheck(this, Graph);

    this.name = name;
    this.bots = _immutable2.default.List();
    this.connections = _immutable2.default.List
    // this._graph = new graphlib.Graph({directed: true})
    ();this.graph = {};
    this.sorted = [];
    this.data = {};

    this.addBot = this.addBot.bind(this);
    this.addConnection = this.addConnection.bind(this);
  }

  _createClass(Graph, [{
    key: 'addBot',
    value: function addBot(bot) {
      var _this = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // console.log(bot)
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

      Object.keys(bot.inputs).forEach(function (k) {
        var value = bot.inputs[k];
        if (typeof value === 'string' || value instanceof String) {
          var patternMatch = value.match(/([A-Z][A-Za-z0-9]+)>([A-Z]+)/);
          if (patternMatch) {
            // if it matches Process1>PORT, then it's an alias
            _this.graph[bot.id].push(patternMatch[1]);
          }
        }
      });

      this.sort();

      if (callback) {
        callback(bot);
      }
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

      conn.tgtBot.inputs[conn.tgtPort] = conn.srcBot.id + '>' + conn.srcPort;

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

      // conn.tgtBot.inputs[conn.tgtPort] = null

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

      this.sorted = toReverse; // .reverse()
    }
  }, {
    key: 'run',
    value: function run(callback) {
      var _this2 = this;

      var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var wrap = function wrap(id) {
        return function (done) {
          done(_this2.getBotById(id).work());
        };
      };
      this.sorted.forEach(function (ids) {
        var _ASQ;

        if (debug) {
          console.log('Running parallel batch... ' + ids);
        }
        (_ASQ = (0, _asynquence2.default)()).all.apply(_ASQ, _toConsumableArray(ids.map(wrap))).then(function () {
          return callback();
        });
      });
    }
  }]);

  return Graph;
}();

exports.default = Graph;