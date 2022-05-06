"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCategoryById = exports.getCountCategory = exports.getCategorys = exports.getCategoryById = exports.deleteCategoryById = exports.createCategory = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

// Get Category Of The database
// By: Yhonattan David Llanos Rivera
// Contact Number: +59169685120
var getCategorys = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.queries.getAllCategory);

          case 6:
            result = _context.sent;
            console.log(result);
            res.json(result.recordset);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getCategorys(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getCategorys = getCategorys;

var createCategory = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var Category, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            Category = req.body.Category;

            if (!(Category == null)) {
              _context2.next = 6;
              break;
            }

            res.status(400).json({
              msg: 'Bad Request. Please fill all fields'
            });
            _context2.next = 14;
            break;

          case 6:
            _context2.next = 8;
            return (0, _database.getConnection)();

          case 8:
            pool = _context2.sent;
            _context2.next = 11;
            return pool.request().input("category", _database.sql.VarChar, Category).query(_database.queries.createNewCategory);

          case 11:
            result = _context2.sent;
            console.log(result.rowsAffected);
            res.json({
              Category: Category
            });

          case 14:
            _context2.next = 20;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            res.status(500);
            res.send(error.message);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));

  return function createCategory(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createCategory = createCategory;

var getCategoryById = /*#__PURE__*/function () {
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
            return pool.request().input('id', id).query(_database.queries.getCategoryById);

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

  return function getCategoryById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getCategoryById = getCategoryById;

var deleteCategoryById = /*#__PURE__*/function () {
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
            return pool.request().input('id', id).query(_database.queries.deleteCategoryById);

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

  return function deleteCategoryById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteCategoryById = deleteCategoryById;

var getCountCategory = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context5.sent;
            _context5.next = 6;
            return pool.request().query(_database.queries.getCountCategory);

          case 6:
            result = _context5.sent;
            console.log(result);
            res.status(200);
            res.json(result.recordset[0]['']);
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            res.status(500);
            res.send(_context5.t0.message);

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));

  return function getCountCategory(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getCountCategory = getCountCategory;

var updateCategoryById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var pool, Category, id, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context6.sent;
            Category = req.body.Category;
            id = req.params.id;

            if (!(Category == null || id == null)) {
              _context6.next = 10;
              break;
            }

            res.status(400).json(msg, "Bad Request undefined Category Or id");
            _context6.next = 15;
            break;

          case 10:
            _context6.next = 12;
            return pool.request().input('category', _database.sql.VarChar, Category).input('id', _database.sql.Int, id).query(_database.queries.updateCategoryById);

          case 12:
            result = _context6.sent;
            res.status(200);
            res.json(result);

          case 15:
            _context6.next = 21;
            break;

          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](0);
            res.status(500);
            res.send(_context6.t0.message);

          case 21:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 17]]);
  }));

  return function updateCategoryById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateCategoryById = updateCategoryById;