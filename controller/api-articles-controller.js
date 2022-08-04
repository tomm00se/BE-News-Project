const { fetchAllArticleData } = require("../model/api-articles-model");

exports.getAllArticles = async (req, res, next) => {
  try {
    const query = req.query;
    const fetchedArticleData = await fetchAllArticleData(query);
    res.status(200).send(fetchedArticleData);
  } catch (err) {
    next(err);
  }
};
