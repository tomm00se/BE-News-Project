const {
  postingArticleData,
} = require("../model/article_id-comments-post-model");

exports.postArticleData = async (req, res, next) => {
  try {
    const id = req.params.article_id;
    const posting = req.body;
    const postedArticleData = await postingArticleData(id, posting);
    res.status(201).send(postedArticleData);
  } catch (err) {
    next(err);
  }
};
