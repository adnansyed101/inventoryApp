const { Router } = require("express");
const publisherController = require("../controllers/publisherControllers");
const publisherRouter = Router();

publisherRouter.get("/", publisherController.showPublisher);

module.exports = publisherRouter;
