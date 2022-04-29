"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserById = exports.getUserById = exports.getLoginUser = exports.deleteUserById = exports.createUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var createUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(req.body == null)) {
              _context.next = 5;
              break;
            }

            res.status(400).json({
              msg: 'Bad Request. Please fill all fields'
            });
            _context.next = 13;
            break;

          case 5:
            _context.next = 7;
            return (0, _database.getConnection)();

          case 7:
            pool = _context.sent;
            _context.next = 10;
            return pool.request().input("name", _database.sql.VarChar, req.body.name).input("lastName", _database.sql.VarChar, req.body.lastName).input("email", _database.sql.VarChar, req.body.email).input("password", _database.sql.VarChar, req.body.password).query(_database.queries.createNewUser);

          case 10:
            result = _context.sent;
            console.log(result.rowsAffected);
            res.json(req.body);

          case 13:
            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(error.message);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getLoginUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            console.log(res);
            _context2.next = 4;
            return (0, _database.getConnection)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input('email', _database.sql.VarChar, req.body.email).input('password', _database.sql.VarChar, req.body.password).query(_database.queries.getLoginUser);

          case 7:
            result = _context2.sent;
            console.log(result);
            res.json(result.recordset);
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            res.status(500);
            res.send(_context2.t0.message);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function getLoginUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getLoginUser = getLoginUser;

var getUserById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            console.log(id);
            _context3.next = 5;
            return (0, _database.getConnection)();

          case 5:
            pool = _context3.sent;
            _context3.next = 8;
            return pool.request().input('id', id).query(_database.queries.getUserById);

          case 8:
            result = _context3.sent;
            console.log(result);
            res.json(result.recordset);
            _context3.next = 17;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            res.status(500);
            res.send(_context3.t0.message);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));

  return function getUserById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var deleteUserById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return (0, _database.getConnection)();

          case 4:
            pool = _context4.sent;
            _context4.next = 7;
            return pool.request().input('id', id).query(_database.queries.deleteUserById);

          case 7:
            result = _context4.sent;
            console.log(result);
            res.status(200);
            res.json(result.rowsAffected);
            _context4.next = 17;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            res.status(500);
            res.send(_context4.t0.message);

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 13]]);
  }));

  return function deleteUserById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteUserById = deleteUserById;

var updateUserById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, User, id, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context5.sent;
            User = req.body.User;
            id = req.params.id;

            if (!(User == null || id == null)) {
              _context5.next = 10;
              break;
            }

            res.status(400).json(msg, "Bad Request undefined Category Or id");
            _context5.next = 15;
            break;

          case 10:
            _context5.next = 12;
            return pool.request().input('user', _database.sql.VarChar, User).input('id', _database.sql.Int, id).query(_database.queries.updateUserById);

          case 12:
            result = _context5.sent;
            res.status(200);
            res.json(result);

          case 15:
            _context5.next = 21;
            break;

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            res.status(500);
            res.send(_context5.t0.message);

          case 21:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 17]]);
  }));

  return function updateUserById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateUserById = updateUserById;