const Product = require("../models/product");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
  });
  
  // Display list of all products.
  exports.product_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: product list");
  });
  
  // Display detail page for a specific product.
  exports.product_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: product detail: ${req.params.id}`);
  });
  
  // Display product create form on GET.
  exports.product_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: product create GET");
  });
  
  // Handle product create on POST.
  exports.product_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: product create POST");
  });
  
  // Display product delete form on GET.
  exports.product_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: product delete GET");
  });
  
  // Handle product delete on POST.
  exports.product_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: product delete POST");
  });
  
  // Display product update form on GET.
  exports.product_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: product update GET");
  });
  
  // Handle product update on POST.
  exports.product_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: product update POST");
  });