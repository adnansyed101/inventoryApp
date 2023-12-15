#! /usr/bin/env node

console.log(
  'This script populates some test product and category to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/inventory?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Product = require("./models/product");
const Category = require("./models/category");

const products = [];
const categories = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createProducts();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// category[0] will always be the Electronics genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function categoryCreate(index, name) {
  const category = new Category({ name: name });
  await category.save();
  categories[index] = category;
  console.log(`Added category: ${name}`);
}

async function productCreate(
  index,
  name,
  description,
  category,
  price,
  inStock,
  imgUrl
) {
  const productDetail = {
    name: name,
    description: description,
    category: category,
    price: price,
    inStock: inStock,
    imgUrl: imgUrl,
  };

  const product = new Product(productDetail);
  await product.save();
  products[index] = product;
  console.log(`Added product: ${name}`);
}

async function createCategories() {
  console.log("Adding Categories");
  await Promise.all([
    categoryCreate(0, "Electronics"),
    categoryCreate(1, "Jewelery"),
    categoryCreate(2, "Men's clothing"),
    categoryCreate(3, "Women's clothing"),
  ]);
}

async function createProducts() {
  console.log("Adding Products");
  await Promise.all([
    productCreate(
      0,
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      categories[2],
      109.95,
      3,
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    ),
    productCreate(
      1,
      "Mens Casual Premium Slim Fit T-Shirts",
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      categories[2],
      22.3,
      4,
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    ),
    productCreate(
      2,
      "Mens Cotton Jacket",
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      categories[2],
      55.99,
      1,
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    ),
    productCreate(
      3,
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      categories[1],
      695,
      0,
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    ),
    productCreate(
      4,
      "Solid Gold Petite Micropave",
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      categories[1],
      168,
      7,
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
    ),
    productCreate(
      5,
      "White Gold Plated Princess",
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      categories[1],
      9.99,
      5,
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
    ),
    productCreate(
      6,
      "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system",
      categories[0],
      64,
      2,
      "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
    ),
    productCreate(
      7,
      "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      categories[0],
      109,
      10,
      "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
    ),
    productCreate(
      8,
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      categories[0],
      114,
      9,
      "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
    ),
    productCreate(
      9,
      "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      categories[3],
      56.99,
      15,
      "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
    ),
    productCreate(
      10,
      "Opna Women's Short Sleeve Moisture",
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      categories[3],
      7.95,
      8,
      "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
    ),
  ]);
}
