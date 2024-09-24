const pool = require("./pool");

async function insertPublisherName(name) {
  await pool.query("INSERT INTO publishers (publishername) VALUES ($1)", [
    name,
  ]);
}

module.exports = {
  insertPublisherName,
};
