const path = require("path");
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const createMovieRouter = require("./routes/createMovieRouter");
const publisherRouter = require("./routes/publisherRouter");
const categoryRouter = require("./routes/categoryRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.use("/", indexRouter);
app.use("/createMovie", createMovieRouter);
app.use("/publisher", publisherRouter);
app.use("/category", categoryRouter);

app.listen(3000, console.log(`Listening to PORT ${PORT}`));
