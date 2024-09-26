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

module.exports = {
  getPublisherName,
  insertPublisherName,
};
