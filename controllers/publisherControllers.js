const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

const alphaErr = "Must only contain letters.";
const lengthErr = "Must be between 1 and 10 characters.";

const validatePublisherName = [
  body("publisherName")
    .trim()
    .isAlpha()
    .withMessage(`Publisher name ${alphaErr}`)
    .isLength({ min: 1, max: 50 })
    .withMessage(`Publisher name ${lengthErr}`),
];

function showPublisher(req, res) {
  res.render("publisher", { title: "Create Publisher" });
}

const publisherCreatePost = [
  validatePublisherName,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create Publisher",
        errors: errors.array(),
      });
    }
    const { publisherName } = req.body;
    await db.insertPublisherName(publisherName);
    res.redirect("/publisher");
  },
];

module.exports = { showPublisher, publisherCreatePost };
