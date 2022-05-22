"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _categoryController = require("../controllers/categoryController");

var router = (0, _express.Router)(); // Get List of categories

router.get('/categorys', _categoryController.getCategorys); // Insert Category

router.post('/categorys', _categoryController.createCategory); // Get Count Category

router.get('/categorys/count', _categoryController.getCountCategory); // Get Category BY ID

router.get('/categorys/:id', _categoryController.getCategoryById); // delete Category

router["delete"]('/categorys/:id', _categoryController.deleteCategoryById); // Update Category

router.put('/categorys/:id', _categoryController.updateCategoryById);
var _default = router;
exports["default"] = _default;