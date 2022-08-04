const { fetchCommentDataById } = require("../model/article-comment-model");

exports.getCommentById = async (req, res, next) => {
  try {
    const id = req.params.article_id;
    const fetchedCommentData = await fetchCommentDataById(id);
    res.status(200).send({ comments: fetchedCommentData });
  } catch (err) {
    next(err);
  }
};
