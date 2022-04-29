"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _fundingController = require("../controllers/fundingController");

var router = (0, _express.Router)(); // Get Rank Funding

router.get('/Funding/rank', _fundingController.setRanckFunding);
var _default = router;
exports["default"] = _default;