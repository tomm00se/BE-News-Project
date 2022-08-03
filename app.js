const express = require("express");
const { getAllArticles } = require("./controller/api-articles-controller");
const { getArticleById } = require("./controller/article_id-controller");
const { patchArticle } = require("./controller/patch-article-id");
const { getTopicsData } = require("./controller/topics-controller");
const { getAllUsers } = require("./controller/users-controller");
const {
  serverErrorHandler,
  handleCustomError,
} = require("./middleware/errors");
const app = express();

app.use(express.json());

app.get("/api/topics", getTopicsData);

app.get("/api/articles/:article_id", getArticleById);

app.patch("/api/articles/:article_id", patchArticle);

app.get("/api/users", getAllUsers);

app.get("/api/articles", getAllArticles);

app.use(handleCustomError);
app.use(serverErrorHandler);

module.exports = app;
