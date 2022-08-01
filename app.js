const express = require("express");
const { getArticleById } = require("./controller/article_id-controller");
const { getTopicsData } = require("./controller/topics-controller");
const { errorMiddleware } = require("./middleware/errors");
const app = express();

app.get("/api/topics", getTopicsData);

app.get("/api/articles/:article_id", getArticleById);

app.use(errorMiddleware);

module.exports = app;
