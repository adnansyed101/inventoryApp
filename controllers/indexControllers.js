function showIndex(req, res) {
  res.render("index", { title: "Homepage" });
}

module.exports = { showIndex };
