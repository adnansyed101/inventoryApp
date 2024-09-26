const { Router } = require("express");
const categoryControllers = require("../controllers/categoryControllers");
const categoryRouter = Router();

categoryRouter.get("/", categoryControllers.categoryCreateGet);
categoryRouter.post("/", categoryControllers.categoryCreatePost);

module.exports = categoryRouter;
