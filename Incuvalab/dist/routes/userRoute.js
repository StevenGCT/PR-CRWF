"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _userController = require("../controllers/userController");

var router = (0, _express.Router)(); // Insert User

router.post('/user', _userController.createUser); // Get User

router.get('/user/:id', _userController.getUserById); // Login User

router.post('/userLogin', _userController.getLoginUser); // delete User

router["delete"]('/user/:id', _userController.deleteUserById); // Update User

router.put('/user/:id', _userController.updateUserById);
var _default = router;
exports["default"] = _default;