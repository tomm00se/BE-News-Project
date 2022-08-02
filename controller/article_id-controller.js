const { fetchArticleFromTable } = require("../model/article_id-model");

exports.getArticleById = async (req, res, next) => {
  try {
    const id = req.params.article_id;
    const result = await fetchArticleFromTable(id);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};
