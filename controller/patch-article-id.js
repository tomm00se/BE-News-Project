const { updateArticleVotes } = require("../model/patch-article-id");

exports.checkBodyType = (req) => {
  if (!req.body.hasOwnProperty("inc_votes")) {
    throw {
      status: 400,
      msg: "Bad Request",
    };
  }
};

exports.patchArticle = async (req, res, next) => {
  try {
    const id = req.params.article_id;
    const incVotes = req.body.inc_votes;

    exports.checkBodyType(req);

    const patchedVotes = await updateArticleVotes(id, incVotes);
    res.status(201).send(patchedVotes);
  } catch (err) {
    next(err);
  }
};
