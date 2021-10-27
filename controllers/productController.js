const Product = require("../models/product");

// Display list of all products
exports.product_list = (req, res, next) => {
  Product.find().exec((err, product_list) => {
    if (err) {
      return next(err);
    }
    res.json(product_list);
  });
};

// Display detail page for a specific product
exports.product_detail = (req, res, next) => {
  Product.findById(req.params.id).exec((err, result) => {
    if (err) {
      return next(err);
    }
    res.json(result);
  });
};

// Display product create form on GET
exports.product_create_get = (req, res, next) => {
  res.send("NOT IMPLEMENTED: Product create form GET");
};

// Handle product create on POST
exports.product_create_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Product create form POST");
};

// Display product delete form on GET
exports.product_delete_get = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Product delete form GET");
};

// Handle product delete form on POST
exports.product_delete_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Product delete form POST");
};

// Display product update form on GET
exports.product_update_get = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Product update form GET");
};

// Handle product update form on POST
exports.product_update_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Product update form POST");
};