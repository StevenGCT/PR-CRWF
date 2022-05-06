"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usersController = require("../controllers/usersController");

var router = (0, _express.Router)(); // Get List of Users

router.get('/users', _usersController.getUsers); // Get User BY ID

router.get('/users/:id', _usersController.getUserById); // Get Count Fonding

router.get('/users/countFunding/:id', _usersController.getCountFundingByUserId); // Get Title Fonding

router.get('/users/TitleFunding/:id', _usersController.getTitleFundingByUserId); // Get Count Donated

router.get('/users/countDonated/:id', _usersController.getCountDonateByUserId); // Get Title Fonding Donnated

router.get('/users/TitleFundingDonated/:id', _usersController.getTitleOfFundingDonateByUserId);
var _default = router;
exports["default"] = _default;