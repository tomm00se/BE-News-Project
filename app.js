const express = require("express");
const {
  getMethodStatus,
  getTopicsData,
} = require("./controller/topics-controller");
const { errorMiddleware } = require("./middleware/errors");
const app = express();

app.use(express.json());

// app.get("/api/topics", getMethodStatus);

app.get("/api/topics", getTopicsData);

app.use(errorMiddleware);

module.exports = app;
