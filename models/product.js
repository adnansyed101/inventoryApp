const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, require: true, maxLength: 100 },
  description: { type: String, maxLength: 300 },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  price: { type: Number },
  inStock: { type: Number },
  imgUrl: { type: String },
});

// Virtual for product's Url
ProductSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/product/${this._id}`;
});

module.exports = mongoose.model("Product", ProductSchema);
