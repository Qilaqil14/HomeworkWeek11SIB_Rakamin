const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const todoRoutes = require("./src/routes/todo.js");
const morgan = require("morgan");

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(bodyParser.json());
app.use(express.json());
app.use("/todos", todoRoutes);

require("dotenv").config;

const port = process.env.PORT;

if (process.env.NODE_ENV != "test") {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
