function showPublisher(req, res) {
  res.render("publisher", { title: "Create Publisher" });
}

module.exports = { showPublisher };
