const { Router } = require("express");
const createMovieController = require("../controllers/createMovieControllers");

const createMovieRouter = Router();

createMovieRouter.get("/", createMovieController.showCreateMovie);

module.exports = createMovieRouter;
