"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _commentController = require("../controllers/commentController");

var router = (0, _express.Router)(); // Get List of categories

router.get('/comments/:id', _commentController.getComments); // Insert Category

router.post('/comment', _commentController.createComment); // delete Category

router["delete"]('/comment/:id', _commentController.deleteCommentById);
var _default = router;
exports["default"] = _default;