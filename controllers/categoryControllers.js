const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

const lengthErr = "Must be between 2 and 10 characters.";

const validateCategoryName = [
  body("categoryName")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage(`Category name ${lengthErr}`),
];

async function categoryCreateGet(req, res) {
  const categories = await db.getCategoryName();
  console.log(categories);
  res.render("category", { title: "Create Category", categories });
}

const categoryCreatePost = [
  validateCategoryName,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("404", {
        title: "404 Something went wrong",
        errors: errors.array(),
      });
    }
    const { categoryName } = req.body;
    await db.insertCategoryName(categoryName);
    res.redirect("/category");
  },
];

module.exports = { categoryCreateGet, categoryCreatePost };
