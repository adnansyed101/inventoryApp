const pool = require("./pool");

async function getPublisherName() {
  const { rows } = await pool.query("SELECT * FROM publishers");
  return rows;
}

async function insertPublisherName(name) {
  await pool.query("INSERT INTO publishers (publishername) VALUES ($1)", [
    name,
  ]);
}

async function getCategoryName() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function insertCategoryName(name) {
  await pool.query("INSERT INTO categories (categoryname) VALUES ($1)", [name]);
}

async function insertMovie(img, name, rating, description, category, publisher) {
  await pool.query(
    "INSERT INTO movies (imglink, moviename, rating, description, categoryid, publisherid) VALUES ($1, $2, $3, $4, $5, $6)",
    [img, name, rating, description, category, publisher]
  );
}

module.exports = {
  getPublisherName,
  insertPublisherName,
  getCategoryName,
  insertCategoryName,
  insertMovie,
};
