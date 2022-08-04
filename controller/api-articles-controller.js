const { fetchAllArticleData } = require("../model/api-articles-model");

exports.getAllArticles = async (req, res, next) => {
  try {
    const fetchedArticleData = await fetchAllArticleData();
    res.status(200).send(fetchedArticleData);
  } catch (err) {
    next(err);
  }
};
