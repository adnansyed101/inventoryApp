function showCreateMovie(req, res) {
  res.render("createMovie", { title: "Create Movie" });
}

module.exports = { showCreateMovie };
