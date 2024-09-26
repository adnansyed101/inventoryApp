const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

const lengthErr = "Must be between 2 and 10 characters.";

const validatePublisherName = [
  body("publisherName")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage(`Publisher name ${lengthErr}`),
];

async function publisherCreateGet(req, res) {
  const publishers = await db.getPublisherName();
  console.log(publishers);

  res.render("publisher", { title: "Create Publisher", publishers });
}

const publisherCreatePost = [
  validatePublisherName,
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).render("404", {
        title: "404 Something went wrong",
        errors: errors.array(),
      });
    }
    const { publisherName } = req.body;
    await db.insertPublisherName(publisherName);
    res.redirect("/publisher");
  },
];

module.exports = { publisherCreateGet, publisherCreatePost };
