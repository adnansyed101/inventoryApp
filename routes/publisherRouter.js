const { Router } = require("express");
const publisherController = require("../controllers/publisherControllers");
const publisherRouter = Router();

publisherRouter.get("/", publisherController.showPublisher);
publisherRouter.post("/", publisherController.publisherCreatePost);

module.exports = publisherRouter;
