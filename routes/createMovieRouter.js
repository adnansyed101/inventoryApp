const { Router } = require("express");
const createMovieController = require("../controllers/createMovieControllers");

const createMovieRouter = Router();

createMovieRouter.get("/", createMovieController.showCreateMovie);
createMovieRouter.post("/", createMovieController.createMoviePost);

module.exports = createMovieRouter;
