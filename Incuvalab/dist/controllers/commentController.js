"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComments = exports.deleteCommentById = exports.createComment = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var deleteCommentById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.params.id;
            _context.next = 4;
            return (0, _database.getConnection)();

          case 4:
            pool = _context.sent;
            _context.next = 7;
            return pool.request().input('idComment', id).query(_database.queries.deleteCommentById);

          case 7:
            result = _context.sent;
            console.log(result);
            res.status(200);
            res.json(result.rowsAffected);
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function deleteCommentById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.deleteCommentById = deleteCommentById;

var createComment = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (!(req.body == null)) {
              _context2.next = 5;
              break;
            }

            res.status(400).json({
              msg: 'Bad Request. Please fill all fields'
            });
            _context2.next = 13;
            break;

          case 5:
            _context2.next = 7;
            return (0, _database.getConnection)();

          case 7:
            pool = _context2.sent;
            _context2.next = 10;
            return pool.request().input("idFunding", _database.sql.Int, req.body.idFunding).input("idUser", _database.sql.Int, req.body.idUser).input("comment", _database.sql.VarChar, req.body.comment).query(_database.queries.createNewComment);

          case 10:
            result = _context2.sent;
            console.log(result.rowsAffected);
            res.json(req.body);

          case 13:
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            res.status(500);
            res.send(_context2.t0.message);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 15]]);
  }));

  return function createComment(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createComment = createComment;

var getComments = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return (0, _database.getConnection)();

          case 4:
            pool = _context3.sent;
            _context3.next = 7;
            return pool.request().input('idFunding', id).query(_database.queries.getComments);

          case 7:
            result = _context3.sent;
            console.log(result);
            res.json(result.recordset);
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            res.status(500);
            res.send(_context3.t0.message);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function getComments(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getComments = getComments;