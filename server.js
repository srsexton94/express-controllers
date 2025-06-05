// Required modules
const express = require("express");
const catsRouter = require("./routes/cats");
const dogsRouter = require("./routes/dogs");

// Required middleware
const cors = require("cors");
const logger = require("morgan");

// Constant values
const PORT = process.env.PORT || 3000;

// Express App
const app = express();

// Middleware Pipline
app.use(cors());
app.use(logger("dev"));

// Routes
app.use("/cats", catsRouter);
app.use("/dogs", dogsRouter);

// Listening for requests (SHOULD BE LAST ON PAGE)
app.listen(PORT, function () {
  console.log(`Server running on ${PORT}`);
});
