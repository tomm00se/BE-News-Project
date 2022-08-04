const { deleteComment } = require("../model/article-comment-model");

exports.deleteCommentById = async (req, res, next) => {
  try {
    const id = req.params.comment_id;
    const result = await deleteComment(id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
