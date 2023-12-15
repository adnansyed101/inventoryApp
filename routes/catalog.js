const express = require("express");
const router = express.Router();

// Require controller modules.
const category_controller = require("../controller/categoryController");
const product_controller = require("../controller/productController");

/// Product Routes ///

// GET catalog home page
router.get("/", product_controller.index);

// GET request for creating a Product. NOTE This must come before routes that display Product (uses id).
router.get("/product/create", product_controller.product_create_get);

// POST request for creating Product
router.get("/product/create", product_controller.product_create_post);

// GET request to delete Product.
router.get("/product/:id/delete", product_controller.product_delete_get);

// POST request to delete Product.
router.post("/product/:id/delete", product_controller.product_delete_post);

// GET request to update Product.
router.get("/product/:id/update", product_controller.product_update_get);

// POST request to update Product.
router.post("/product/:id/update", product_controller.product_update_post);

// GET request for one Product.
router.get("/product/:id", product_controller.product_detail);

// GET request for list of all Product items.
router.get("/products", product_controller.product_list);

/// Category ROUTES ///

// GET request for creating a Category. NOTE This must come before route that displays Category (uses id).
router.get("/category/create", category_controller.category_create_get);

//POST request for creating category.
router.post("/category/create", category_controller.category_create_post);

// GET request to delete category.
router.get("/category/:id/delete", category_controller.category_delete_get);

// POST request to delete category.
router.post("/category/:id/delete", category_controller.category_delete_post);

// GET request to update category.
router.get("/category/:id/update", category_controller.category_update_get);

// POST request to update category.
router.post("/category/:id/update", category_controller.category_update_post);

// GET request for one category.
router.get("/category/:id", category_controller.category_detail);

// GET request for list of all category.
router.get("/categories", category_controller.category_list);

module.exports = router;
