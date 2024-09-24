const { Router } = require("express");
const indexController = require("../controllers/indexControllers");

const indexRouter = Router();

indexRouter.get("/", indexController.showIndex);

module.exports = indexRouter;
