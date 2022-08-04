const { createNewComment } = require("../model/article_id-comments-post-model");

exports.postNewComment = async (req, res, next) => {
  try {
    const id = req.params.article_id;
    const postData = req.body;
    const createdComment = await createNewComment(id, postData);
    res.status(201).send(createdComment);
  } catch (err) {
    next(err);
  }
};
