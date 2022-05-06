"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)(); //Variable de Etorno

var _default = {
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || '',
  dbPort: process.env.DB_PORT || 1433,
  dbPassword: process.env.DB_PASS || '',
  dbServer: process.env.DB_SERVER || '',
  dbDatabase: process.env.DB || ''
};
exports["default"] = _default;