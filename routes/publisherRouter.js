const { Router } = require("express");
const publisherController = require("../controllers/publisherControllers");
const publisherRouter = Router();

publisherRouter.get("/", publisherController.publisherCreateGet);
publisherRouter.post("/", publisherController.publisherCreatePost);

module.exports = publisherRouter;
