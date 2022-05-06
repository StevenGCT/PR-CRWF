"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _categoryRoute = _interopRequireDefault(require("./routes/categoryRoute"));

var _fundingRoute = _interopRequireDefault(require("./routes/fundingRoute"));

var _UsersRoute = _interopRequireDefault(require("./routes/UsersRoute"));

var app = (0, _express["default"])(); //Setting

app.set('port', _config["default"].port); //Middelwars

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_categoryRoute["default"]);
app.use(_fundingRoute["default"]);
app.use(_UsersRoute["default"]);
var _default = app;
exports["default"] = _default;