const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

const lengthErr = "Must be between 2 and 30 characters.";

const validateCreateMovie = [
  body("imgLink").trim(),
  body("movieName")
    .trim()
    .isLength({ min: 2, max: 30 })
    .withMessage(`Movie name ${lengthErr}`),
  body("movieRating").trim(),
  body("description").trim(),
];

async function showCreateMovie(req, res) {
  const categories = await db.getCategoryName();
  const publishers = await db.getPublisherName();

  res.render("createMovie", { title: "Create Movie", categories, publishers });
}

const createMoviePost = [
  validateCreateMovie,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("404", {
        title: "404 Something went wrong",
        errors: errors.array(),
      });
    }
    const {
      imgLink,
      movieName,
      rating,
      description,
      selectCategory,
      selectPublisher,
    } = req.body;

    await db.insertMovie(
      imgLink,
      movieName,
      rating,
      description,
      selectCategory,
      selectPublisher
    );

    res.redirect("/createMovie");
  },
];

module.exports = { showCreateMovie, createMoviePost };
